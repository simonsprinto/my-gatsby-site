import * as React from "react"
import { Link, graphql } from "gatsby"

const SingleBlogPostPage = ({ data }) => {
    const post = data.contentfulBlogPost

    return (
        <main>
            <Link to="/news/">Till nyhetssidan 🎶🎶🎶</Link>
            <h1>{post.title}</h1>
            <p>Publicerad: {post.publishDate}</p>
        </main>
    )
}

export default SingleBlogPostPage

export const Head = () => <title>Dynamiskt</title>

export const query = graphql`
query SingleBlogpostQuery($slug: String) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    publishDate(formatString: "YYYY-MM-DD")
  }
}
`