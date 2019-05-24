import { Link } from "gatsby"
import React from "react"
import styles from "./tag.module.css"


const Tag = ({ tag }) => {
  return (
    <Link to={`/tag/${tag.slug}/posts`} className={styles.button}>{tag.name}</Link>
  )
}

export default Tag
