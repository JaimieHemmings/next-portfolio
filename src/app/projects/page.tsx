import React from 'react'
import Bounded from '@/components/Bounded'
import Heading from '@/components/Heading'
import ContentList from '@/components/ContentList'

const page = () => {
  return (
    <Bounded>
      <Heading>
        Projects
      </Heading>
      <div className="prose prose-xl prose-invert mb-10">
        <p>
          Welcome to my projects page! Here you'll find a collection of projects I've worked on. I hope you find them interesting and inspiring.
        </p>
      </div>
      <ContentList />
    </Bounded>
  )
}

export default page
