import React from "react"
import { Link } from "gatsby"
import InViewMonitor from 'react-inview-monitor';
import Category from '@components/atoms/category'
import Date from '@components/atoms/date'
import HeroImage from '@components/atoms/hero-image';
import PostContent from '@components/molecules/post-content';

const ArticleSection = ({ post, previous, next}) => (
  <InViewMonitor
    classNameNotInView='inview-section-hidden'
    classNameInView='inview-section-active'
  >
    <div>
      <div className="w-full flex justify-center mb-4">
        <Category text={post.frontmatter.categoryObject.name} link={`/category/${post.frontmatter.categoryObject.slug}/posts`} />
      </div>
      <div className="p-2">
        <h1 className="text-2xl lg:text-3xl font-bold my-1">{post.frontmatter.title}</h1>
        <p className="text-sm text-gray-600 my-1">{post.frontmatter.description}</p>
        <Date date={post.frontmatter.date} />
      </div>
      <HeroImage node={post.frontmatter.hero} props={{ alt: post.frontmatter.title }} />
      <PostContent post={post} />
      <ul className="p-4 flex justify-between items-center">
        <li className="w-1/2 text-left">
          {previous && (
            <Link to={`post${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li className="w-1/2 text-right">
          {next && (
            <Link to={`post${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </div>
  </InViewMonitor>
)

export default ArticleSection
