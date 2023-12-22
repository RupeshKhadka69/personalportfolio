import React from 'react'
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'
type Props = {
    posts: Meta
}

const ListPost = ({ posts }: Props) => {
    const { id, title, date } = posts
    const formattedDate = getFormattedDate(date)
    return (
        <li className='py-8'>
            <Link className="underline  text-xl" href={`/blogs/${id}`}>{title}</Link>

            <p className="text-sm">{formattedDate}</p>
        </li>
    )
}

export default ListPost