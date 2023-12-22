import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

import CustomImage from "@/app/Components/CustomImage";
import Video from "@/app/Components/Video";
type FileTree = {
    "tree": [
        {
            path: string,
        }
    ]
}
export const getPostByName = async (fileName: string):Promise<BlogPost | undefined> => {
    const res = await fetch(`https://raw.githubusercontent.com/RupeshKhadka69/blogpostfile/main/${fileName}`,{
        //  cache: 'no-store'  ,
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }   
    });
   if(!res.ok) return undefined;
   const rawMDX = await res.text();
   if(rawMDX === '404: Not Found') return undefined;

   const {frontmatter,content} = await  compileMDX<{ title: string, date: string, tags: string[] }>({
    source:rawMDX,
    components: {
        Video,
        CustomImage,
    },
    options: {
        parseFrontmatter: true,
        mdxOptions: {
            rehypePlugins: [
              
                rehypeSlug,
                [rehypeAutolinkHeadings, {
                    behavior: 'wrap'
                }],
            ],
        },
    }

});
   const id = fileName.replace(/\.mdx$/, '')

   const blogPostObj: BlogPost = { meta: { id, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags }, content }

   return blogPostObj
}

export async function getPostMeta(): Promise<Meta[] | undefined> {
    const res = await fetch('https://api.github.com/repos/RupeshKhadka69/blogpostfile/git/trees/main?recursive=1', {
        // cache: 'no-store'  ,
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    })
    if (!res.ok) return undefined;

    const repoFileTree: FileTree = await res.json();
    const filesArray = repoFileTree.tree.map(file => file.path).filter(file => file.endsWith('.mdx'));

    const posts: Meta[] = [];
    for (const file of filesArray) {
        const post = await getPostByName(file);
        if (post) {
            const { meta } = post;
            posts.push(meta);
        }
    }

    return posts.sort((a, b) => a.date > b.date ? -1 : 1);
}
