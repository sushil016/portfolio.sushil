"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { Code, Palette, Globe } from "lucide-react"
import  Anime  from "./svgs/icons8-anime-600.svg"


const projects = [
  {
    id: 1,
    name: "Aspirant OP",
    title: "NoteWrite , An Ed-tech Website",
    description: "A cutting-edge web application for students to learn and grow",
    tech: "Next.js , TailwindCSS , MongoDB , Node.js , Express.js",
    image: Anime,
    category: "web",
    color: "#1E1E2E",
  },
  {
    id: 2,
    name: "Aspirant OP",
    title: "Live loction staying app",
    description: "An innovative mobile app for students to stay in touch with their friends and family",
    tech: "Next.js , TailwindCSS , MongoDB , Node.js , Express.js",
    image: "",
    category: "mobile",
    color: "#1E1E2E",
  },
  {
    id: 3,
    name: "Aspirant OP",
    title: "Paytm Clone",
    description: `A Paytm Clone with all the features of the original Paytm , made with Next.js and TailwindCSS
    Learned a lot of new things while making this project , like how to make payment page and how to use Razorpay API`,
    tech: "Next.js , TailwindCSS , MongoDB , Node.js , Express.js",
    image: "",
    category: "web",
    color: "#1E1E2E",
  },{
    id: 4,
    name: "Aspirant OP",
    title: "portfolio website",
    description: "A sleek Animated portfolio website",
    tech: "Next.js , TailwindCSS , MongoDB , Node.js , Express.js",
    image: "",
    category: "web",
    color: "#1E1E2E",
  },

  
]

const CategoryIcon = ({ category }) => {
  switch (category) {
    case "web":
      return <Globe className="w-6 h-6" />
    case "mobile":
      return <Code className="w-6 h-6" />
    case "design":
      return <Palette className="w-6 h-6" />
    default:
      return null
  }
}

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [45, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])

  const titleVariants = {
    rest: { y: 0 },
    hover: { y: -5, transition: { duration: 0.3, type: "spring", stiffness: 300 } },
  }

  return (
    <Tilt
      tiltMaxAngleX={4}
      tiltMaxAngleY={4}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.05}
      gyroscope={true}
    >
      <motion.div
        
        ref={cardRef}
        className="relative overflow-hidden rounded-lg shadow-lg"
        style={{ 
          
             // rotateX: rotate,
            opacity
        }}
        whileHover={{ y: -10, boxShadow: "0 20px 30px rgba(0,0,0,0.2)" }}
      >
        <motion.div
          className="absolute inset-0 bg-black opacity-40"
          initial={{ opacity: 0.4 }}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
        <div>
        <motion.div
          className="w-full h-48 object-cover text-textColor font-bold text-xs"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.p className="text-iconColor font-bold text-xs p-4">{project.name}</motion.p>
        </div>
        <motion.div className="absolute top-4 right-4 rounded-full p-2" whileHover={{ scale: 1.1 }}>
          <CategoryIcon category={project.category} />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 p-6 mb-2 h-48">
          <motion.h3
            className="text-2xl font-bold mb-2 text-iconColor"
            variants={titleVariants}
            initial="rest"
            whileHover="hover"
          >
            {project.title}
          </motion.h3>
          <p className="text-sm text-textColor bg-black p-2 rounded-lg ">{project.description}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <motion.img src={project.image} className="img"></motion.img>
          <p className="text-sm">{project.tech}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default function ProjectSection() {
  // const [bgColor, setBgColor] = useState(projects[0].color)
   const containerRef = useRef(null)
  // const { scrollYProgress } = useScroll({ target: containerRef })

  // const backgroundColor = useTransform(
  //   scrollYProgress,
  //   projects.map((_, i) => i / (projects.length - 1)),
  //   projects.map(p => p.color)
  // )

  // useEffect(() => {
  //   return scrollYProgress.onChange(latest => {
  //     const index = Math.floor(latest * projects.length)
  //     setBgColor(projects[index % projects.length].color)
  //   })
  // }, [scrollYProgress])

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-three"
      
      // animate={{ backgroundColor: bgColor }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-iconColor">{"<"}Code : My Projects{" />"}</h2>
        <div className="gap-8 flex flex-col sm:w-2/3 justify-center h-full sm:ml-32 md:ml-40 lg:ml-64 ">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}