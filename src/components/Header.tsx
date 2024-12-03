import Link from 'next/link'
import React from 'react'
import NavBar from './NavBar'

export default function Header() {
  return (
    <header className='top-0 z-50 max-w-7xl md:sticky md:top-4 mx-auto'>
      <NavBar />
    </header>
  )
}
