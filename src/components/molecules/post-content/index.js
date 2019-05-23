import PropTypes from "prop-types"
import React from "react"
import rehypeReact from "rehype-react"
import Iframely from "@components/atoms/iframely"
import styles from "./post-content.module.css"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "iframely": Iframely },
}).Compiler

const PostContent = ({ post }) => {
  return (
    <div className={styles.content}>{renderAst(post.htmlAst)}</div>
  )
}
 

PostContent.propTypes = {
  post: PropTypes.object
}

PostContent.defaultProps = {
  post: null,
}


export default PostContent
