import React from "react"
import styles from "./date.module.css"


const Date = ({ date }) => {
  return (
    <time
      dateTime={date}
      className={styles.date}
    >
      {date}
    </time>
  )
}

export default Date
