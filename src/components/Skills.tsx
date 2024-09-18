import React from 'react'
import { motion } from 'framer-motion'
import { Svg } from './ui/svg'
import { data } from '@/data/data'

const Skills = () => {
  return (
    <main className=' w-full h-full py-8 bg-three'>
        <div className='text-iconColor text-center text-3xl font-bold'>{"< "}Code : Skills {"/>"} </div>
        <div className=' gap-4 py-8 items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 flex-wrap justify-center md:pl-28 '>
        
            {data.skills.map((skill) => (
                <motion.li 
                className='border p-2 rounded-md w-40 h-15 text-white flex justify-start items-center gap-2 pl-4 duration-200 '
                key={skill.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.90 }} >
                    <Svg />
                    {/* <Image className='w-10 h-10 rounded-full bg-white' src={skill.image} alt={skill.name} width={50} height={50} /> */}
                    <span className='text-textColor'>{skill.name}</span>
                </motion.li>
            ))}
        </div>
    </main>
  )
}

export default Skills
3