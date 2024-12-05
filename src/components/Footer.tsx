import clsx from "clsx";
import React from "react";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";

export default async function Footer() {
  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            Jaimie Hemmings
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            © {new Date().getFullYear()} Jaimie Hemmings
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            <li>
              <Link
                className={clsx(
                  "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400",
                )}
                href="/about"
              >
                About
              </Link>
            </li>
            <span
              className="text-4xl font-thin leading-[0] text-slate-400"
              aria-hidden="true"
            >
              /
            </span>
            <li>
              <Link
                className={clsx(
                  "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400",
                )}
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <span
              className="text-4xl font-thin leading-[0] text-slate-400"
              aria-hidden="true"
            >
              /
            </span>
            <li>
              <Link
                className={clsx(
                  "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400",
                )}
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <span
              className="text-4xl font-thin leading-[0] text-slate-400"
              aria-hidden="true"
            >
              /
            </span>
            <li>
              <Link
                className={clsx(
                  "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400",
                )}
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="socials inline-flex justify-center sm:justify-end">
          <Link
            href="https://github.com/JaimieHemmings"
            target="_blank"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            aria-label="Jaimie Hemmings on LinkedIn"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </Bounded>
  );
}