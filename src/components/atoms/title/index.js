import React from "react"
import styles from "./title.module.css"

const Title = ({ title, subtitle }) => {
  const sub = subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null;
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      {sub}
    </>
  )
}

export default Title
