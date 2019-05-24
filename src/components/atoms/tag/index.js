import { Link } from "gatsby"
import React from "react"
import styles from "./tag.module.css"


const Tag = ({ text }) => {
  return (
    <Link to="" className={styles.button}>{text}</Link>
  )
}

export default Tag
