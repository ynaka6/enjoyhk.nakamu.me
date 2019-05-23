import { Link } from "gatsby"
import React from "react"
import InViewMonitor from 'react-inview-monitor';
import PostCard from '@components/molecules/post-card';

const Blog = ({ posts, pageContext }) => {
  const prevPage = pageContext.currentPage > 1 ? (
    <Link
      to={`${ pageContext.currentPage - 1 === 1 ? 'posts' : 'posts/' + (pageContext.currentPage - 1)}`}
      className="text-gray-800 font-bold bg-gray-200 hover:bg-gray-400 border border-grey-darkest rounded-full py-2 px-8 no-underline"
      rel="prev"
    >
      前のページへ
    </Link>
  ) : null

  const nextPage = pageContext.numPages > pageContext.currentPage ? (
    <Link
      to={`posts/${pageContext.currentPage + 1}`}
      className="text-gray-800 font-bold bg-gray-200 hover:bg-gray-400 border border-grey-darkest rounded-full py-2 px-8 no-underline"
      rel="next"
    >
      次のページへ
    </Link>
  ) : null

  return (
    <div className="w-full">
      <InViewMonitor
        classNameNotInView='inview-section-hidden'
        classNameInView='inview-section-active'
      >
        <div className="container mx-auto">
          <div className="w-full mt-6 mb-10">

            {posts.map(({ node }) => (
              <div key={node.fields.slug} className="mx-2">
                <PostCard post={node} />
              </div>
            ))}

          </div>
          <div className="flex justify-between mb-10">
            <div>
              {prevPage}
            </div>
            <div>
              {nextPage}
            </div>
          </div>
        </div>
      </InViewMonitor>
    </div>
  )
}

export default Blog
