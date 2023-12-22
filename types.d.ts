type Meta = {
    id: sting,
    title: string,
    date: string,
    tags: string[]

}
type BlogPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>
}