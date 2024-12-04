"use client"

import React, { useEffect, useRef } from 'react'
import { MdCircle } from 'react-icons/md'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import Heading from './Heading'
import Bounded from './Bounded'

gsap.registerPlugin(ScrollTrigger)

type Tech = {
  name: string
  color: string
}

export default function TechList() {

  const techs: Tech[] = [
    {name: "React",      color: "#9b5de5"},
    {name: "Next.js",    color: "#f15bb5"},
    {name: "TypeScript", color: "#fee440"},
    {name: "Django",     color: "#00bbf9"},
    {name: "Tailwind",   color: "#00f5d4"},
    {name: "Three.js",   color: "#fbb02d"}
  ]

  const component = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        }
      })

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400)
          }
        },{
          x: (index) => {
            return index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400)
          },
          ease: "power1.inOut",
        }
      )
    }, component)
    return () => ctx.revert()
  })

  return (
    <section className="overflow-hidden" ref={component}>
      <Bounded as="div">
        <Heading as="h2" size="xl" className="mb-8">
          What I Use
        </Heading>
      </Bounded>
      {techs.map((tech, index) => (
        <div key={index} className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700" aria-label={tech.name || undefined}>
          {Array.from({ length: 15}, (_, i) => (
            <React.Fragment key={i}>
              <span
                className="tech-item text-8xl font-extrabold uppercase tracking-tighter"
                style={{
                  color: i === 7 ? tech.color : "inheret",
                }}
              >
                {tech.name}
              </span>
              <span className='text-3xl'>
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  )
}
