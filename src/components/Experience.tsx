import React from 'react'
import Bounded from './Bounded'
import Heading from './Heading'

export default function Experience() {
  return (
    <Bounded as="section">
      <Heading as="h2" size="lg">
        Experience
      </Heading>
        <div className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            Full Stack Developer
          </Heading>
          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>2024-Ongoing</span>
            <span className="text-3xl font-extralight">/</span>
            <span>HelpCloseBy</span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
            <p>As a Full Stack Developer at HelpCloseBy, I am contributing to the ongoing development of a web application aimed at supporting families unable to access food banks. I focus on building responsive and user-friendly front-end components using React and JavaScript, while adhering to design standards to ensure a cohesive and accessible user experience. On the back end, I assist with integrating APIs and databases, optimizing performance, and implementing scalable solutions.</p>
          </div>
        </div>
        <div className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            Creative Freelance Developer
          </Heading>
          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>2019-Ongoing</span>
            <span className="text-3xl font-extralight">/</span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
            <p>Collaborating with small to medium-sized businesses to update and redevelop their websites. This involves enhancing user experience, modernizing designs, ensuring mobile responsiveness, and optimizing for SEO. Jaimie delivers bespoke solutions tailored to each clients needs, utilizing the latest web technologies and content management systems to create engaging and effective digital presences.
            </p>
          </div>
        </div>
        <div className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            Front End Developer
          </Heading>
          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>2017-2019</span>
            <span className="text-3xl font-extralight">/</span>
            <span>ITPie</span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
            <p>In my role as a Frontend Developer at ITPie, I worked in an Agile environment to deliver custom web solutions for a diverse range of clients. Utilizing a bespoke content management system built in C#, I was responsible for designing, developing, and testing front-end components that met each client's unique requirements using JavaScript and various libraries.</p>
          </div>
        </div>
    </Bounded>
  )
}
