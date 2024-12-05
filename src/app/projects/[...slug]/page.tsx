import React from 'react'
import Bounded from '@/components/Bounded'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import { getArticleData } from '@/lib/articles'

const page = async ({ params }: {params: { slug: string }}) => {
  const articleData = await getArticleData(params.slug)
  return (
    <Bounded as="article">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
        <Heading as="h1">
          { articleData.title }
        </Heading>
        <div className="flex gap-4 text-yellow-400 text-xl font-bold py-5">
          {articleData.tags.map((tag: string, index: number) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">{ articleData.date }</p>
        { articleData.liveSite || articleData.repo ? (
          <div className="pt-6 mb-0 px-4 flex gap-4 flex-col md:flex-row">
            { articleData.repo ? (
              <Button isExternal={true} linkField={articleData.repo} label="View Github Repo" className="mt-8" />
            ) : null }
            { articleData.liveSite ? (
              <Button isExternal={true} linkField={ articleData.liveSite } label="View Live Site" className="mt-8" />
            ) : null }
          </div>
        ) : null }
        <div className="prose prose-invert prose-lg mt-12 w-full max-w-none md:mt-20 mb-12">
          <div className="article-body" dangerouslySetInnerHTML={{__html: articleData.contentHtml }} />
          <div className="mt-12">
            <Button linkField={`/${articleData.category}`} label={`Back to ${articleData.category}`} className="mt-8" />
          </div>
        </div>
      </div>
    </Bounded>
  )
}

export default page

