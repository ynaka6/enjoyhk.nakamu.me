import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "@components/atoms/image";
import styles from "./category-card.module.css"

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.slug}/posts`} className={styles.card}>
      <div className={styles.content}>
        <Image filename={`category/${category.slug}.jpg`} alt={category.name} className={styles.image} />
        <div className={styles.overlay} />
        <h2 className={styles.title}>{category.name}</h2>
      </div>
    </Link>
  )
}
 

CategoryCard.propTypes = {
  category: PropTypes.object
}

CategoryCard.defaultProps = {
  category: null,
}


export default CategoryCard
