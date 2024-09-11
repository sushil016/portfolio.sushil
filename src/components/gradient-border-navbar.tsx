'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useMousePosition from '@/app/utils/mouseposition'

const navItems = [
  { name: 'Technical Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Work', href: '#work' },
  { name: 'Contact Me', href: '#contact' },
]

export function GradientBorderNavbar() {

  function NavEnter (){
    setBgVarient("navbarCursor")
 }

 function NavOut (){
  setBgVarient("default")
 }


  return (
    <nav className="fixed top-0 w-full  p-4 backdrop-blur-sm drop-shadow-lg">
      <div className="max-w-6xl mx-auto ">
        <ul className="flex justify-center items-center space-x-4 sm:space-x-8 ">
          {navItems.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} 
            >
              <Link href={item.href}>
                <span className="relative px-4 py-2  text-white text-sm sm:text-lg font-medium cursor-pointer transition-all duration-300 rounded-full group hover:border hover:text-neutral-300 ease-in-out bg-b-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                {item.name}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

// bg-[#1E1E2E]