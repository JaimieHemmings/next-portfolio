import React from 'react'
import Bounded from '@/components/Bounded'
import Heading from '@/components/Heading'
import ContentList from '@/components/ContentList'
import { getCategorisedArticles } from '@/lib/articles'

const page = async () => {
  const articles = getCategorisedArticles()
  const projectArticles = articles.projects || []

  return (
    <Bounded>
      <Heading>
        Projects
      </Heading>
      <div className="prose prose-xl prose-invert mb-10">
        <p>
          Welcome to my projects page! Here you&apos;ll find a collection of projects I&apos;ve worked on. I hope you find them interesting and inspiring.
        </p>
      </div>
      <ContentList articles={projectArticles} />
    </Bounded>
  )
}

export default page
