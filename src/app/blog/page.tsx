import React from 'react'
import Bounded from '@/components/Bounded'
import Heading from '@/components/Heading'
import ContentList from '@/components/ContentList'
import ConnectDB from '@/config/Database'
import BlogPost from '@/models/BlogPost'

const page = async () => {

  await ConnectDB();
  const blogPosts: any = await BlogPost.find({}).sort({ createdAt: -1 }).lean();


  return (
    <Bounded>
      <Heading>
        Blog
      </Heading>
      <div className="prose prose-xl prose-invert my-10">
        <p>
          Welcome to my blog, here you&apos;ll find a collection of articles on web development, technology, and design. I hope you find them helpful and informative.
        </p>
      </div>
      <ContentList posts={blogPosts} />
    </Bounded>
  )
}

export default page
