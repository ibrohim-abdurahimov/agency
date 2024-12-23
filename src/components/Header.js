'use client'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/Logo (9).svg'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='bg-[#232536]'>
      <nav className='text-white p-3 h-[80px] flex items-center justify-between container m-auto px-4'>
        <div>
          <Link href={'/'}>
            <Image src={logo} alt='logo' />
          </Link>
        </div>
        <ul className='flex items-center gap-8'>
          <Link href={'/'}>Home</Link>
          <Link href={'/service'}>Service</Link>
          <Link href={'/company'}>Company</Link>
          <Link href={'/career'}>Career</Link>
          <Link href={'/blog'}>Blog</Link>
          <Link href={'/contact'}>Contact us</Link>
          <Link href={'/project'}>Clone project</Link>
        </ul>
      </nav>

    </header>
  )
}

export default Header