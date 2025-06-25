"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Code, Palette, Globe } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Anime from "./svgs/icons8-anime-600.svg";
import { SvgTwo } from "./ui/Svgtwo";
import { Curlybracket } from "./svgs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Project {
  id: number;
  name: string;
  title: string;
  description: string[];
  tech: string;
  image: any;
  category: string;
  color: string;
  githubLink: string;
  liveLink: string | null;
}

const projects = [
  {
    id: 1,
    name: "Aspirant OP",
    title: "NoteWrite : Ed-tech Platform",
    description: [
      "Full-stack education platform managing 15+ engineering courses with automated content management system for educational resources and study materials",
      "Implemented secure user authentication, integrated payment gateway for course purchases, and optimized performance for seamless learning experiences across devices"
    ],
    tech: "Next.js, TypeScript, MongoDB, Express.js, Docker",
    image: Anime,
    category: "web",
    color: "#1E1E2E",
    githubLink: "https://github.com/sushil016/notewrite-edtech",
    liveLink: "https://notewrite.sushilsahani.tech/"
  },
  {
    id: 2,
    name: "Aspirant OP",
    title: "getChecked - Location Tracker",
    description: [
      "Real-time location tracking app where users can pin locations, set radius, and track movements with detailed insights on time spent in different zones",
      "AI-powered attendance management for organizations with automated weekly reports combining manual and system check-in/out data for workforce management"
    ],
    tech: "React Native, TypeScript, Expo, PostgreSQL, Express.js",
    image: "",
    category: "mobile",
    color: "#1E1E2E",
    githubLink: "https://github.com/sushil016/realtime-android-app",
    liveLink: null // No live demo available for mobile app
  },
  {
    id: 3,
    name: "Aspirant OP",
    title: "Solution AI - Learning Platform",
    description: [
      "AI-driven personalized learning platform that recommends tailored question sets using Scikit-learn and collaborative filtering techniques for adaptive learning",
      "Integrated machine learning models into Next.js full-stack application with PostgreSQL and Prisma ORM, enhancing user engagement by 30% through personalized study plans"
    ],
    tech: "React.js, TypeScript, MongoDB, Scikit-learn, Docker",
    image: "",
    category: "web",
    color: "#1E1E2E",
    githubLink: "https://github.com/sushil016/QuizSol-bot",
    liveLink: "https://solutionai.sushilsahani.tech/"
  },
  {
    id: 4,
    name: "Aspirant OP",
    title: "Portfolio Website",
    description: [
      "Dynamic portfolio website with 3D animations, smooth transitions using Framer Motion and GSAP showcasing projects and technical skills",
      "Implemented sleek, intuitive user interface with custom-built 3D cards, contact form with server-side validation and dynamic routing for enhanced user engagement"
    ],
    tech: "Next.js, TypeScript, TailwindCSS, Framer Motion, GSAP",
    image: "",
    category: "web",
    color: "#1E1E2E",
    githubLink: "https://github.com/sushil016/portfolio.sushil",
    liveLink: "https://sushilsahani.tech/"
  },
];

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "web":
      return <Globe className="w-5 h-5" />;
    case "mobile":
      return <Code className="w-5 h-5" />;
    case "design":
      return <Palette className="w-5 h-5" />;
    default:
      return null;
  }
};

const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const titleVariants = {
    rest: { y: 0 },
    hover: {
      y: -5,
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
    },
  };

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.02}
      gyroscope={true}
    >
      <motion.div
        ref={cardRef}
        className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 p-6 shadow-2xl hover:shadow-iconColor/10 transition-all duration-300 md:h-80 h-96"
        whileHover={{ 
          boxShadow: "0px 20px 30px rgba(75, 0, 130, 0.4), 0 10px 15px rgba(255, 165, 0, 0.2)" 
        }}
      >
        {/* Header with icons */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <SvgTwo />
            </motion.div>
            <motion.p className="text-textColor font-bold text-sm">
              {project.name}
            </motion.p>
          </div>
          
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
            >
              <Link href={project.githubLink} target="_blank">
                <SiGithub className="w-5 h-5 text-iconColor" />
              </Link>
            </motion.button>
            
            {project.liveLink && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
              >
                <Link href={project.liveLink} target="_blank">
                  <CategoryIcon category={project.category} />
                </Link>
              </motion.button>
            )}
          </div>
        </div>

        {/* Title */}
        <motion.h3
          className="text-xl font-bold text-iconColor mb-3 overflow-hidden"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
          variants={titleVariants}
          initial="rest"
          whileHover="hover"
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <div className="mb-1 mt-6">
          {project.description.map((point: string, index: number) => (
            <div key={index} className="flex items-start gap-2 mt-3">
              <div className="w-1.5 h-1.5 bg-iconColor rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-four text-xs leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
            >
              <Image
                src={Curlybracket}
                width={20}
                height={20}
                alt="Tech icon"
              />
            </motion.div>
            <p 
              className="text-green-500 text-xs font-medium"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {project.tech}
            </p>
          </div>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-iconColor/5 to-transparent opacity-0 pointer-events-none"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Tilt>
  );
};

export default function ProjectSection() {
  const containerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-three"
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16 text-iconColor">
          {"< "}Code : Projects{" />"}
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
