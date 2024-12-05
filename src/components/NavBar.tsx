"use client";

import clsx from "clsx";
import React, { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import Button from "./Button";

type LinkItem = {
  href: string;
  label: string;
};

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const name: string = "Jaimie Hemmings";
  const links: LinkItem[] = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
  ];
  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
        <div className="flex items-center justify-between">
          <NameLogo name={name} />
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            aria-label="Close menu"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden "
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>
          {links.map((link, index) => (
            <li key={index} className="first:mt-8">
              <Link
                className={clsx(
                  "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 ",
                )}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={false}
              >
                <span className="relative">{link.label}</span>
              </Link>
            </li>
          ))}
          <li>
            <Button
              linkField="#"
              label="Contact"
              className="ml-3"
            />
            </li>
        </div>
        <DesktopMenu link={links}/>
      </ul>
    </nav>
  );
}

function NameLogo({ name }: { name: string }) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter text-slate-900"
    >
      {name}
    </Link>
  );
}

function DesktopMenu({link}: {link: LinkItem[]}) {
  return (
    <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
      {link.map((link, index) => (
      <li key={index}>
            <Link
              className={clsx(
                "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900",
              )}
              href={link.href}
              aria-current={false}
            >
              <span
                className={clsx(
                  "absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
                )}
              />
              <span className="relative">{link.label}</span>
            </Link>
          </li>
      ))}
      <li>
        <Button
          linkField="/contact"
          label="Contact"
          className="ml-3"
        />
      </li>
    </div>
  );
}