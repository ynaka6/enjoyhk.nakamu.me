import { Link } from "gatsby"
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from "@components/atoms/image";
import Date from '@components/atoms/date'
import styles from "./post-card.module.css"


class EmbedPostCard extends React.Component  {

  constructor(...args) {
    super(...args)
    this.ref = React.createRef()
  }

  render() {
    const { href } = this.props;
    return <StaticQuery
      query={graphql`
        query  {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___created_at]},
            limit: 1000
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

      `}
      render={(data) => {
        const postNode = data.allMarkdownRemark.edges.find(e => e.node.fields.slug === href)
        if (!postNode) return null

        const post        = postNode.node
        const categories  = data.allCategoriesJson.edges
        const tags        = data.allTagsJson.edges
        const statuses    = data.allPostStatusesJson.edges
        post.frontmatter.categoryObject = categories.find(e => e.node.name === post.frontmatter.category).node
        post.frontmatter.tagObjects = post.frontmatter.tags.map(t => {
          const tagItem = tags.find(e => e.node.name === t)
          return tagItem ? tagItem.node : null
        })
        post.frontmatter.statusObject = statuses.find(e => e.node.slug === post.frontmatter.status).node
    
        return (
          <Link to={`/post/${post.fields.slug}`} className={styles.card}>
            <div className={styles.cardImage}>
              <Image filename="enjoyhk-logo.png" alt={post.frontmatter.title}　/>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardContentTitle}>{post.frontmatter.title}{" "}</div>
              <div className={styles.cardContentDescription}>{post.frontmatter.description}{" "}</div>
              <div className={styles.cardContentOther}>
                <div className="w-6">
                  <Image filename="icon/hk-icon.png" alt={post.frontmatter.title} className="rounded-full mr-1"　/>
                </div>
                <span className="text-sm text-gray-600">{href}</span>
                <span className="mx-2 text-gray-400">|</span>
                <Date date={post.frontmatter.created_at} />
              </div>
            </div>
          </Link>
        )
      }}
    />

  }
}

export default EmbedPostCard