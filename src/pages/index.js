import React from 'react'
import Hero from '../components/Hero'
import Hero2 from '../components/Hero2'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
const IndexPage = ({ data }) => {
  const {
    // komma tecken???
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <Navbar />
      <Hero2 />

      <Posts posts={posts} title="recently published" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
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
export default IndexPage
