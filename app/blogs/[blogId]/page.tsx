import React from 'react'
import { getPostMeta, getPostByName } from '@/lib/posts'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'
import 'highlight.js/styles/github-dark.css'
export const revalidate =  86400
type Props = {
    params: {
        blogId: string
    }
}

const generateStaticParams = async () => {
    const posts = await getPostMeta()
    if (!posts) return []
    return posts.map((post) => ({
        blogId: post.id


    })
    )
}

export const generateMetadata = async ({ params: { blogId } }: Props) => {

    const post = await getPostByName(`${blogId}.mdx`) //deduped!

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.meta.title,
    }
}


const page = async ({ params: { blogId } }: Props) => {
    const post = await getPostByName(`${blogId}.mdx`) //deduped!
    if (!post) notFound()
    const { meta, content } = post
    const pubDate = getFormattedDate(meta.date)

    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
    ))

    return (
        <div className='mt-[4rem]  prose prose-slate lg:prose-xl dark:prose-invert max-w-[70rem] mx-auto px-[4rem]'>
            <h1 className='text-xl font-bold'>{meta.title}</h1>
            <div className='text-sm text-gray-500'>{pubDate}</div>

            <article>
                {content}
            </article>
            <section>
                <h3>Related:</h3>
                <div className="flex flex-row gap-4">
                    {tags}
                </div>
            </section>
            <p className='text-lg underline'><Link href='/'>Go back to the homepage</Link></p>
        </div>
    )
}

export default page