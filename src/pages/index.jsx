import * as React from "react"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <main>
      <Link to="/news/">Till nyhetssidan</Link>
      <h1>Startsidan</h1>

      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <h2>{node.title}</h2>
      ))}
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Startsida</title>

// GraphQL Query
export const IndexPageQuery = graphql`
query MyQuery {
  allContentfulBlogPost {
    edges {
      node {
        title
      }
    }
  }
}
`;