import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TwitterIcon from "@components/atoms/icon/twitter"
import InstagramIcon from "@components/atoms/icon/instagram"
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
          <a
            href="https://twitter.com/nakanakamu0828"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="twitter"
            className="text-twitter mr-3 none-external-link"
          >
            <TwitterIcon className="fill-current w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/____nakamu____/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="instagram"
            className="text-instagram none-external-link"
          >
            <InstagramIcon className="fill-current w-8 h-8" />
          </a>
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
