import React from "react"
import { graphql } from 'gatsby'
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Breadcrumb from "@components/molecules/breadcrumb"
import Blog from "@components/organisms/blog-posts/blog"


class CategoryPostsTemplate extends React.Component {
  render() {
    const props = this.props
    const category = props.data.categoriesJson
    return (
      <Layout>
        <SEO title={`${category.name}に関する一覧`} keywords={[`gatsby`, `application`, `react`]} />
        <Breadcrumb breadcrumbs={[
            { to: '/', label: 'Home' },
            { to: '/posts', label: '記事一覧' },
            { to: `/category/${category.slug}/posts`, label: `${category.name}に関する一覧`, active: true },
          ]}
        />
        <div className="flex flex-col">
          <Blog
            posts={(
              this.props.data.allMarkdownRemark.edges.map(edge => {
                edge.node.frontmatter.categoryObject = category
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

export default CategoryPostsTemplate

export const categoryBlogListQuery = graphql`
  query categoryBlogListQuery($category: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
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
    categoriesJson(name: { eq: $category }) {
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
