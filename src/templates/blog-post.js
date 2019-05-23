import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet';

import SEO from "@components/seo"
import Layout from "@components/templates/layout"
import Breadcrumb from "@components/molecules/breadcrumb"
import ArticleSection from "@components/organisms/blog-post/article"

class BlogPostTemplate extends React.Component {
  render() {
    const categories = this.props.data.allCategoriesJson.edges
    const post = this.props.data.markdownRemark
    post.frontmatter.categoryObject = categories.find(e => e.node.name === post.frontmatter.category).node

    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Helmet>
          <script type="text/javascript" src="//cdn.iframe.ly/embed.js" charset="utf-8"/>
        </Helmet>

        <div className="bg-white container mx-auto">
          <div className="flex flex-col justify-center">
            <Breadcrumb breadcrumbs={[
              { to: '/', label: 'Home' },
              { to: '/posts', label: '記事一覧' },
              { to: `/post${post.fields.slug}`, label: post.frontmatter.title, active: true },
            ]}
            />
            <ArticleSection post={post} previous={previous} next={next} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
      }
      excerpt(pruneLength: 160)
      htmlAst
      frontmatter {
        title
        description
        category
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
    allCategoriesJson {
      edges {
        node {
          name,
          slug        
        }
      }
    }
  }
`