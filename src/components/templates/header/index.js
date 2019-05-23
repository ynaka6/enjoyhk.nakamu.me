import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"


const Header = ({ siteTitle, scrollY }) => (
  <header
    className={styles.header}
  >
    <div className={styles.container}>
      <div className={styles.box}>
        <div>
          <h1 className={styles.title}>
            <Link
              to="/"
              className="logo"
            >
              {siteTitle}<sup>HK</sup>
            </Link>
          </h1>
        </div>
        <div className="flex">
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  scrollY: PropTypes.number,
}

Header.defaultProps = {
  siteTitle: ``,
  scrollY: 0,
}


export default Header
