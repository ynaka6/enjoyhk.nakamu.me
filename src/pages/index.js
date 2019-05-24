import React from "react"
import { graphql } from 'gatsby'
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Blog from "@components/organisms/home/blog"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Blog
      totalCount={data.allMarkdownRemark.totalCount}
      posts={(
        data.allMarkdownRemark.edges.map(edge => {
          edge.node.frontmatter.categoryObject = data.allCategoriesJson.edges.find(e => e.node.name === edge.node.frontmatter.category).node
          edge.node.frontmatter.statusObject = data.allPostStatusesJson.edges.find(e => e.node.slug === edge.node.frontmatter.status).node
          return edge
        })
      )}
    />
  </Layout>
)

export default IndexPage


export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]},
      limit: 20
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            category
            tags
            status
            date(formatString: "YYYY.MM.DD"),
            hero {
              publicURL
              childImageSharp {
                fluid(maxWidth: 980) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
    allCategoriesJson {
      edges {
        node {
          name,
          slug        
        }
      }
    }
    allPostStatusesJson {
      edges {
        node {
          name,
          slug        
        }
      }
    }
  }
`
