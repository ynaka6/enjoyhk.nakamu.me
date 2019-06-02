import React from "react"
import { graphql } from 'gatsby'
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Breadcrumb from "@components/molecules/breadcrumb"
import Blog from "@components/organisms/blog-posts/blog"


class TagPostsTemplate extends React.Component {
  render() {
    const props = this.props
    const tag = props.data.tagsJson
    return (
      <Layout>
        <SEO title={`${tag.name}に関する一覧`}  description={`EnjoyHKの「タグ - ${tag.name}」に関する一覧を表示します`} />
        <Breadcrumb breadcrumbs={[
            { to: '/', label: 'Home' },
            { to: '/posts', label: '記事一覧' },
            { to: `/tag/${tag.slug}/posts`, label: `${tag.name}に関する一覧`, active: true },
          ]}
        />
        <div className="flex flex-col">
          <Blog
            posts={(
              this.props.data.allMarkdownRemark.edges.map(edge => {
                edge.node.frontmatter.categoryObject = props.data.allCategoriesJson.edges.find(e => e.node.name === edge.node.frontmatter.category).node
                edge.node.frontmatter.tagObjects = edge.node.frontmatter.tags.map(t => {
                  const tagItem = props.data.allTagsJson.edges.find(e => e.node.name === t)
                  return tagItem ? tagItem.node : null
                })
                edge.node.frontmatter.statusObject = props.data.allPostStatusesJson.edges.find(e => e.node.slug === edge.node.frontmatter.status).node
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

export default TagPostsTemplate

export const tagBlogListQuery = graphql`
  query tagBlogListQuery($skip: Int!, $limit: Int!, $tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___created_at], order: DESC }
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
            created_at(formatString: "YYYY.MM.DD")
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
    tagsJson(name: { eq: $tag }) {
      name,
      slug
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
