import { Link } from "gatsby"
import React from "react"
import PostCard from '@components/molecules/post-card';



const Blog = (props) => {
  if (0 === props.totalCount) {
    return null
  }
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="w-full mt-6 mb-10">

          {props.posts.map(({ node }) => (
            <div key={node.fields.slug} className="mx-2">
              <PostCard post={node} />
            </div>
          ))}

        </div>
        <div className="flex justify-center">
          <Link to="/posts" className="my-10 py-4 px-20 text-gray-800 bg-gray-200 hover:bg-grey-400 font-bold border border-grey-darkest rounded-sm no-underline">記事一覧へ</Link>
        </div>
      </div>
    </div>
  )
}

export default Blog
