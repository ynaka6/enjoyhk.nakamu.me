import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeroImage from '@components/atoms/hero-image'
import Category from '@components/atoms/category'
import PostStatusTag from '@components/atoms/post-status-tag'
import Date from '@components/atoms/date'
import styles from "./post-card.module.css"

const PostCard = ({ post }) => {
  return (
    <div className={styles.card}>
      <div className={styles.category}>
        <Category text={post.frontmatter.categoryObject.name} link={`/category/${post.frontmatter.categoryObject.slug}/posts`} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          <div className="mb-2 leading-normal">
            <Link to={`/post/${post.fields.slug}`} className="mr-2 text-black hover:text-grey-darkest font-bold text-lg mb-2 no-underline">{post.frontmatter.title}{" "}</Link>
            <PostStatusTag status={post.frontmatter.statusObject} />
          </div>
          <p className="text-grey-darker text-sm mb-2">{post.frontmatter.description}{" "}</p>
          <Date date={post.frontmatter.date} />
        </div>
        <div className={styles.contentImage}>
          <Link to={`/post/${post.fields.slug}`}>
            <HeroImage node={post.frontmatter.hero} props={{ alt: post.frontmatter.title }} />
          </Link>
        </div>
      </div>
    </div>
  )
}
 

PostCard.propTypes = {
  post: PropTypes.object
}

PostCard.defaultProps = {
  post: null,
}


export default PostCard
