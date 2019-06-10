import React from "react"
import { graphql } from 'gatsby'
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Information from "@components/atoms/information"
import Blog from "@components/organisms/home/blog"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="EnjoyHK" keywords={[`gatsby`, `react`, `香港`, `ブログ`]} />
    <div className="w-full mb-2">
      <Information message="日々の生活や旅行など日本とは異なることや日本人には疑問に思うこと記録するブログです。" />
    </div>
    <Blog
      totalCount={data.allMarkdownRemark.totalCount}
      posts={(
        data.allMarkdownRemark.edges.map(edge => {
          edge.node.frontmatter.categoryObject = data.allCategoriesJson.edges.find(e => e.node.name === edge.node.frontmatter.category).node
          edge.node.frontmatter.tagObjects = edge.node.frontmatter.tags.map(t => {
            const tagItem = data.allTagsJson.edges.find(e => e.node.name === t)
            return tagItem ? tagItem.node : null
          })
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
      sort: { order: DESC, fields: [frontmatter___created_at]},
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
            created_at(formatString: "YYYY.MM.DD"),
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
    allTagsJson {
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
