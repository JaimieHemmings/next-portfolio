import React from 'react'
import Bounded from '@/components/Bounded'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Link from 'next/link'

const page = () => {
  return (
    <Bounded as="article">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
        <Heading as="h1">
          Article Example
        </Heading>
        <div className="flex gap-4 text-yellow-400 text-xl font-bold">
          <span>Tag 1</span>
          <span>Tag 2</span>
        </div>
        <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">Wednesday, December 4, 2024</p>
        <div className="pt-6 mb-0 px-4 flex gap-4">
          <Button linkField="/blog" label="View Github Repo" className="mt-8" />
          <Button linkField="/blog" label="View Live Site" className="mt-8" />
        </div>
        <div className="prose prose-invert prose-lg mt-12 w-full max-w-prose md:mt-20 mb-12">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, accusantium repellat? Iure ex error perferendis laborum maxime harum alias iste? Eius ipsum facere rem cum tempora reprehenderit optio impedit odio?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, accusantium repellat? Iure ex error perferendis laborum maxime harum alias iste? Eius ipsum facere rem cum tempora reprehenderit optio impedit odio?</p>
        </div>
        <img src="https://picsum.photos/900/300" alt="Article Image" className="rounded-lg mx-auto w-full h-auto" />
        <div className="prose prose-invert prose-lg mt-12 w-full max-w-prose md:mt-20">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, accusantium repellat? Iure ex error perferendis laborum maxime harum alias iste? Eius ipsum facere rem cum tempora reprehenderit optio impedit odio?</p>
          <h2>Extra Heading</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, accusantium repellat? Iure ex error perferendis laborum maxime harum alias iste? Eius ipsum facere rem cum tempora reprehenderit optio impedit odio?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, accusantium repellat? Iure ex error perferendis laborum maxime harum alias iste? Eius ipsum facere rem cum tempora reprehenderit optio impedit odio?</p>
          <div className="mt-12">
            <Button linkField="/blog" label="Back to Blog" className="mt-8" />
          </div>
        </div>
      </div>
    </Bounded>
  )
}

export default page
