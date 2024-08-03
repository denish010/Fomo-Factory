'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import cryptoLogo from '../../../public/analytics.png'

const Navbar = () => {
  const pathname = usePathname()
  
  return (
    <div className="fixed top-0 left-0 h-full w-[200px] bg-blue-500 shadow-lg z-10">
      <div className="flex flex-col items-center py-6">
        <Image src={cryptoLogo} height={50} width={50} alt="logo" />
        <p className="mt-2 text-2xl font-semibold text-white">Crypto Vault</p>
      </div>
      <nav className="flex flex-col gap-6 mt-10">
        <Link
          href="/"
          className={`hover:font-bold px-6 py-3 text-lg text-white ${pathname === '/' ? 'font-bold text-white underline' : 'hover:text-white'}`}
        >
          Home
        </Link>
        <Link
          href="/prices"
          className={`hover:font-bold px-6 py-3 text-lg text-white ${pathname === '/prices' ? 'font-bold text-white underline' : 'hover:text-white'}`}
        >
          Prices
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
