import React from 'react'
import Bounded from '@/components/Bounded'
import Heading from '@/components/Heading'
import ContentList from '@/components/ContentList'
import { getCategorisedArticles } from '@/lib/articles'

const page = () => {
  const articles = getCategorisedArticles()
  const blogArticles = articles.blog || []
  return (
    <Bounded>
      <Heading>
        Blog
      </Heading>
      <div className="prose prose-xl prose-invert my-10">
        <p>
          Welcome to my blog! Here you&apos;ll find a collection of articles on web development, technology, and design. I hope you find them helpful and informative.
        </p>
      </div>
      <ContentList articles={blogArticles} />
    </Bounded>
  )
}

export default page
