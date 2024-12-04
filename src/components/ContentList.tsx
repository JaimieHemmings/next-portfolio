"use client"

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { gsap } from 'gsap'

type ContentItem = {
  title: string;
  tags: string[];
  image: string;
};

const itemList: ContentItem[] = [
  {
    title: "Blog Post Title 1",
    tags: ["JavaScript", "React"],
    image: "/image/profile-image.jpg"
  },
  {
    title: "Blog Post Title 2",
    tags: ["JavaScript", "React"],
    image: "/image/profile-image.jpg"
  },
  {
    title: "Blog Post Title 3",
    tags: ["JavaScript", "React"],
    image: "/image/profile-image.jpg"
  },
  {
    title: "Blog Post Title 1",
    tags: ["CSS", "Tailwind"],
    image: "/image/profile-image.jpg"
  },
];

export default function ContentList() {

  const component = useRef(null);
  const revealRef = useRef(null);
  const [currentItem, setCurrentItem] = useState<null | number>(null);

  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };

      // Calculate speed and direction
      const speed = Math.sqrt(
        Math.pow(
          mousePos.x - lastMousePos.current.x, 2
        ) + Math.pow(
          mousePos.y - lastMousePos.current.y, 2
        )
      );

      let ctx = gsap.context(() => {
        if (currentItem != null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth + 250;

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x -110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
            rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
            ease: "back.out(2)",
            duration: 1.3,
            opacity: 1,
          })

        }
        lastMousePos.current = mousePos;
        return () => {
          ctx.revert();
        }
      }, component)
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [currentItem]);

  const onMouseEnter = (index: number) => {
    setCurrentItem(index);
  }

  const onMouseLeave = () => {
    setCurrentItem(null);
  }

  return (
    <div ref={component}>
      <ul
        onMouseLeave={onMouseLeave}
        className="grid border-b border-b-slate-100"
      >
        {itemList.map((item, index) => (
          <li
            key={index}
            className="list-item opacity-0f"
            onMouseEnter={() => onMouseEnter(1)}  
          >
            <Link
              href="#"
              className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
              aria-label="Blog Post Title">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{item.title}</span>
                <div className="flex gap-3 text-yellow-400 text-lg font-bold">
                  {item.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
              <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                Read More <MdArrowOutward />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div
          className="hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg bg-cover bg-center opacity-0 transition-[background] duration-300"
          style={{
            backgroundImage:
              currentItem !== null ? `url(${itemList[currentItem].image})` : "",
          }}
          ref={revealRef}
        ></div>
    </div>
  )
}
