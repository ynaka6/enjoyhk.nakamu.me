import { Link } from "gatsby"
import React from "react"
import styles from "./category.module.css"


const Category = ({ text, link }) => {
  return (
    <Link to={link} className={styles.button}>{text}</Link>
  )
}

export default Category
