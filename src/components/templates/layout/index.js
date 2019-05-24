/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../header"
import Footer from "../footer"
import Sidemenu from "../sidemenu"
import Information from "@components/atoms/information"
import CategoryCard from "@components/molecules/category-card"

import styles from "./layout.module.css"

class Layout extends React.Component  {
  constructor(props) {
    super(props)
    this.state = { y: 0 }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.setState({ y: window.scrollY }))
  }

  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                author
              }
            }
            allCategoriesJson {
              edges{
                node{
                  name,
                  slug        
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Header
              siteTitle={data.site.siteMetadata.title}
              scrollY={this.state.y}
            />
            <div className={styles.container}>
              <div className="w-full flex flex-wrap justify-center mb-2">
                {data.allCategoriesJson.edges.map(({ node }) => <CategoryCard key={node.slug} category={node} />)}
              </div>
              <div className="w-full mb-2">
                <Information message="香港在住リモートエンジニア「なかむ」の海外生活雑記ブログ。日々の生活や旅行など日本とは異なることや日本人には疑問に思うことをスレッド形式で記録しています。" />
              </div>
              <main className={styles.main}>
                {children}
              </main>
              <div className={styles.sidemenu}>
                <Sidemenu />
              </div>
            </div>
            <Footer />
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
