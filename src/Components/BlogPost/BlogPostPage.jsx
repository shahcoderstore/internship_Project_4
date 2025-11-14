import React from 'react'
import DecHeader from '../DecHeader'
import BlogLayout from './BlogLayout'

function BlogPostPage() {
    let name = "Blog Posts"
    return (
        <>
            <DecHeader name={name} />
            <BlogLayout/>
        </>
    )
}

export default BlogPostPage