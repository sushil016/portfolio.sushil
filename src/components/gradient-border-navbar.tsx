'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'


const navItems = [
  { name: 'Technical Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
]

interface props  {
  bgVariant:string
  setBgVarient:React.Dispatch<React.SetStateAction<string>>
}

export function GradientBorderNavbar(props:props) {
 
  function NavEnter (){
    props.setBgVarient("navbarCursor")
 }

 function NavOut (){
  props.setBgVarient("default")
 }

  return (
    <nav className="fixed md:w-full h-[60px] z-10 backdrop-blur-sm drop-shadow-lg w-full flex justify-center items-center ">
      <div className="flex justify-center items-center ">
        <ul className="flex justify-center items-center md:space-x-8 sm:space-x-6 gap-2">
          {navItems.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} 
            >
              <Link href={item.href}>
                <span 
                // onMouseEnter={NavEnter}
                // onMouseLeave={NavOut}
                 className="relative md:px-3 md:py-2 px-2 py-1 text-[#CAA6F7] text-sm sm:text-lg font-medium cursor-pointer transition-all duration-300 rounded-full group hover:border  ease-in-out bg-b-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
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