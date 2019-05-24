import React from "react"
import Tag from '@components/atoms/tag'
import styles from "./tags-card.module.css"

const TagsCard = ({ tags }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Tags</h2>
      <div className="flex flex-wrap">
        {tags.map(tag => <Tag tag={tag.node} />)}
      </div>
    </div>
  )
}

export default TagsCard
