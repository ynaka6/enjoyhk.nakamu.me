import React from "react"
import { graphql } from 'gatsby'
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Breadcrumb from "@components/molecules/breadcrumb"
import Blog from "@components/organisms/blog-posts/blog"


class BlogPostsTemplate extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="記事一覧" description="EnjoyHKの記事一覧を表示します" />
        <Breadcrumb breadcrumbs={[
            { to: '/', label: 'Home' },
            { to: '/posts', label: '記事一覧', active: true },
          ]}
        />
        <div className="flex flex-col">
          <Blog
            posts={(
              this.props.data.allMarkdownRemark.edges.map(edge => {
                edge.node.frontmatter.categoryObject = this.props.data.allCategoriesJson.edges.find(e => e.node.name === edge.node.frontmatter.category).node
                edge.node.frontmatter.tagObjects = edge.node.frontmatter.tags.map(t => {
                  const tagItem = this.props.data.allTagsJson.edges.find(e => e.node.name === t)
                  return tagItem ? tagItem.node : null
                })
                edge.node.frontmatter.statusObject = this.props.data.allPostStatusesJson.edges.find(e => e.node.slug === edge.node.frontmatter.status).node
                return edge
              })
            )}
            pageContext={this.props.pageContext}
          />
        </div>
      </Layout>
    )
  }
}

export default BlogPostsTemplate

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            category
            tags
            status
            date(formatString: "YYYY.MM.DD")
            hero {
              publicURL
              childImageSharp {
                fluid(maxWidth: 980) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
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
