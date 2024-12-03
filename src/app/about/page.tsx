import Bounded from '@/components/Bounded'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading as="h1" size="xl" className="col-start-1">
          About Me
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <p>Hi, I&apos;m Jaimie Hemmings, a passionate and experienced full stack developer specializing in building bespoke web applications and engaging user experiences. With a strong foundation in Django and React, I craft scalable, dynamic, and responsive solutions that align with both user needs and business goals.</p>
          <p>Over the years, I&apos;ve honed my skills in front-end development to deliver pixel-perfect designs using tools like React, Tailwind CSS, and Three.js, while my expertise in back-end technologies enables me to create robust APIs and seamless integrations with frameworks like Django. I take pride in writing clean, maintainable code and ensuring my projects are optimized for performance, security, and scalability.</p>
          <p>I&apos;m not just about code—collaboration and problem-solving are at the heart of what I do. Whether working independently or as part of a team, I thrive in environments where innovation and creativity drive success.</p>
          <p>Beyond development, I&apos;m committed to staying on the cutting edge of technology, constantly exploring new tools and techniques to deliver exceptional results. Let&apos;s create something amazing together!</p>
          <Button linkField="#" label="Contact Me" />
        </div>
        <Image
          className="col-start-2 row-start-1 max-w-sm md:col-start-2 md:row-end-3"
          src="/image/profile-image.jpg"
          alt="Jaimie Hemmings"
          width={400}
          height={400}
        />
      </div>
    </Bounded>
  )
}

export default page
