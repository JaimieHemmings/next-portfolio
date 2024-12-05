import Bounded from '@/components/Bounded'
import Heading from '@/components/Heading'
import React from 'react'

const page = () => {
  return (
    <Bounded>
      <Heading as="h1">
        Contact
      </Heading>
      <div className="prose prose-xl prose-slate prose-invert col-start-1">
        <p>Please bear with me as I build out this page. In the meantime, feel free to reach out to me on <a href="https://www.linkedin.com/in/jaimiehemmings/" target="_blank" rel="noopener noreferrer" className="text-yellow-400">LinkedIn</a>.</p>
      </div>
    </Bounded>
  )
}

export default page
