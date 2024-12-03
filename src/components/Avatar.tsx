"use client"

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { gsap } from 'gsap';

type AvatarProps = {
  image: string;
  altText: string;
  className?: string;
}

export default function Avatar({
  image, altText, className
}: AvatarProps) {

  const component = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".avatar",
        {
          opacity: 0, scale: 1.4
        }, {
          scale: 1, opacity: 1, duration: 1.3, ease: "power3.inOut"
        }
      )

      window.onmousemove = (e) => {
        if (!component.current) return

        const componentRect = (component.current as HTMLElement)
          .getBoundingClientRect()
          const componentCenterX = componentRect.left + componentRect.width / 2

          let componentPercent = {
            x: (e.clientX - componentCenterX) / componentRect.width / 2
          }

          let distFromCenter = 1 - Math.abs(componentPercent.x)

          gsap.timeline({
            defaults: {
              duration: 0.5,
              overwrite: "auto",
              ease: "power3.Out"
            }
          }).to(".avatar", {
            rotation: gsap.utils.clamp(-2, 2, 5 * componentPercent.x),
            duration: 0.5
          }, 0).to(".highlight", {
            opacity: distFromCenter - 0.7,
            x: -10 + 20 * componentPercent.x,
            duration: 0.5
          }, 0)
      }
    }, component)
  }, [])

  return (
    <div ref={component} className={clsx("relative h-full w-full", className)}>
      <div className="max-auto avatar aspect-square overflow-hidden rounded-3xl border-22 border-slate-700 opacity-0">
        <Image
          src={image}
          alt={altText}
          width={300}
          height={300}
          className="avatar-image h-full w-full object-fill"
        />
        <div className="highlight absolute inset-0 hidden w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 md:block">

        </div>
      </div>
    </div>
  )
}
