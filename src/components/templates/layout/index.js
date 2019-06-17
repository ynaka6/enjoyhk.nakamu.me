/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import AdSense from 'react-adsense'

import Header from "../header"
import Footer from "../footer"
import Sidemenu from "../sidemenu"
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
            allTagsJson {
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
                {process.env.GOOGLE_ADSENSE_ID ? <AdSense.Google
                  client={process.env.GOOGLE_ADSENSE_ID}
                  slot=''
                /> : ''}
              </div>
              <div className="w-full flex flex-wrap justify-center mb-2">
                {data.allCategoriesJson.edges.map(({ node }) => <CategoryCard key={node.slug} category={node} />)}
              </div>
              <main className={styles.main}>
                {children}
              </main>
              <div className={styles.sidemenu}>
                <Sidemenu tags={data.allTagsJson.edges} />
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
