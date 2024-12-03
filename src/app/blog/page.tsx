import React from 'react'
import Bounded from '@/components/Bounded'
import Heading from '@/components/Heading'
import ContentList from '@/components/ContentList'

export default function page() {
  return (
    <Bounded>
      <Heading>
        Blog
      </Heading>
      <div className="prose prose-xl prose-invert mb-10">
        <p>
          Welcome to my blog! Here you'll find a collection of articles on web development, technology, and design. I hope you find them helpful and informative.
        </p>
      </div>
      <ContentList />
    </Bounded>
  )
}
