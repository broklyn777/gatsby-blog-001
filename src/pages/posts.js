import React from 'react'
import Layout from '../components/Layout'
import Hero2 from '../components/Hero2'
import Navbar from '../components/Navbar'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
const PostsPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <Navbar />
      <Hero2 />
      <Posts posts={posts} title="all-posts" />
    </Layout>
  )
}
export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM Do, YYYY")
          slug
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

export default PostsPage
