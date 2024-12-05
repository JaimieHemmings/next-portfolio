"use client"

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ArticleItem } from '@/types'

interface Props {
  articles: ArticleItem[]
}

gsap.registerPlugin(ScrollTrigger);

export default function ContentList({ articles }: Props) {

  console.log(articles)

  const component = useRef(null);
  const revealRef = useRef(null);
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const [currentItem, setCurrentItem] = useState<null | number>(null);

  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        gsap.fromTo(item,
          {opacity: 0, y: 20},
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "elastic.out(1, 0.3)",
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100px",
              end: "bottom center",
              toggleActions: "play none none none"
            }
          }
        )
      })
    })
    return () => {
      ctx.revert()
    }
  }, []);

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
          const maxX = window.innerWidth - 250;

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

  useEffect(() => {
    articles.forEach((url) => {
      if(!url) return;
      const img = new Image();
      img.src = url.image;
    })
  }, [articles]);

  const onMouseEnter = (index: number) => {
    setCurrentItem(index);
  }

  const onMouseLeave = () => {
    setCurrentItem(null);
  }

  return (
    <div ref={component}>
      {articles.length === 0 && (
        <div className="text-slate-200 prose text-2xl prose-invert font-bold py-12">
          <p>No posts found</p>
        </div>
      )}
      <ul
        onMouseLeave={onMouseLeave}
        className="grid border-b border-b-slate-100"
      >
        {articles.map((articles, index) => (
          <li
            ref={(el) =>{ itemsRef.current[index] = el; }}
            key={index}
            className="list-item opacity-0f"
            onMouseEnter={() => onMouseEnter(index)}  
          >
            <Link
              href={`/${articles.category}/${articles.id}`}
              className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
              aria-label="Blog Post Title">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{articles.title}</span>
                <div className="flex gap-3 text-yellow-400 text-lg font-bold">
                  {/*{item.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}*/}
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
              currentItem !== null ? `url(${articles[currentItem].image})` : "",
          }}
          ref={revealRef}
        ></div>
    </div>
  )
}
