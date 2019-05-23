import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styles from "./breadcrumb.module.css"

const Breadcrumb = ({ breadcrumbs }) => (
  <div className={styles.breadcrumbNav}>
    <nav className={styles.container}>
      <ol className={styles.breadcrumb}>
        {breadcrumbs.map((value, index) => {
          return (
            value.active ? (
              <li key={index}>
                <span>{value.label}</span>
              </li>
            ) : (
              <li key={index}>
                <Link to={value.to}>{value.label}</Link>
              </li>
            )        
          )
        })}
      </ol>
    </nav>
  </div>
)
 

Breadcrumb.propTypes = {
    breadcrumbs: PropTypes.array
}

Breadcrumb.defaultProps = {
    breadcrumbs: [],
}


export default Breadcrumb
