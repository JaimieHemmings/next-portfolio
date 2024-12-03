import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='top-0 z-50 max-w-7xl md:sticky md:top-4'>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
          <li>
            <Link href='#'>Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
