import React from "react"
import styles from "./post-status-tag.module.css"


const PostStatusTag = ({ status }) => {
  let style = styles.tag
  if ('writting' === status.slug) {
    style = styles.tagWritting
  } else if ('published' === status.slug)  {
    style = styles.tagPublished
  }
  return (
    <span className={style}>{status.name}</span>
  )
}

export default PostStatusTag
