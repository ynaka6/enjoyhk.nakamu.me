import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Tags = ({ tags }) => {
  if (!tags || tags.length === 0) return

  return (
    <div>
      {tags.map((value, index) => {
        return <li key={index} className="mr-1">{value}</li>
      })}
    </div>
  )
}
 

Tags.propTypes = {
    tags: PropTypes.array
}

Tags.defaultProps = {
    tags: [],
}


export default Tags
