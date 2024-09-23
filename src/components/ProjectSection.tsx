"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Code, Palette, Globe, Github } from "lucide-react";
import Anime from "./svgs/icons8-anime-600.svg";
import { SvgTwo } from "./ui/Svgtwo";
import { Curlybracket } from "./svgs";
import Image from "next/image";
import { useRouter } from "next/navigation";

const projects = [
  {
    id: 1,
    name: "Aspirant OP",
    title: "NoteWrite : An Ed-tech Website",
    description:
      "Developed a comprehensive ed-tech platform using the MERN (MongoDB, Express.js, React, Node.js) stack.",
    description2:
      "The website features interactive course modules, real-time progress tracking, and a user-friendly dashboard for both students and instructors.",
    description3:
      " Implemented secure user authentication, integrated payment gateway for course purchases, and optimized performance for seamless learning experiences across devices.",
    description4: "This project is still in development....!",
    tech: "JavaScript , TypeScript , Next.js , TailwindCSS , MongoDB , Node.js , Express.js , JWT , Docker",
    image: Anime,
    category: "web",
    color: "#1E1E2E",
  },
  {
    id: 2,
    name: "Aspirant OP",
    title: "Live loction staying app",
    description:
      "Created a mobile application using React Native for precise location tracking of employees during work hours",
    description2:
      " Implemented a geofencing system to verify user presence within a specified office radius.",
    description3:
      " Developed a scalable backend with Node.js and Express.js, utilizing PostgreSQL for efficient data management",
    description4:
      "Integrated real-time location updates, custom notification systems, and secure authentication to ensure accurate attendance tracking and enhance workforce management.",
    tech: "React Native , TypeScript , Expo , TailwindCSS , PosrgreSQL, Node.js , Express.js",
    image: "",
    category: "mobile",
    color: "#1E1E2E",
  },
  {
    id: 3,
    name: "Aspirant OP",
    title: "Paytm Clone",
    description: `Developed a simplified Paytm clone, replicating core functionalities of the popular digital payment platform`,
    description2: `Utilized React for the frontend, ensuring a responsive and user-friendly interface, and integrated secure payment gateways for transactions`,
    description3: `Implemented features like wallet management, transaction history, and user authentication to enhance user experience and security`,
    description4: `This project is still in development....!`,
    tech: "JavaScript , TypeScript , React.js , TailwindCSS , MongoDB , Node.js , Express.js , JWT , Docker",
    image: "",
    category: "web",
    color: "#1E1E2E",
  },
  {
    id: 4,
    name: "Aspirant OP",
    title: "sushil.tech : Portfolio Website",
    description:
      "Designed and developed a dynamic, responsive portfolio website using Next.js, showcasing proficiency in modern React frameworks.",
    description2:
      "Implemented a sleek, intuitive user interface with smooth animations and a custom-built 3D Cards for enhanced user engagement.",
    description3:
      "Integrated a contact form with server-side validation and demonstrated project showcases with dynamic routing and rich media integration.",
    description4:
      "Waiting for the feedback....! || What is anime overcooking me in my code , just kidding",
    tech: "TypeScript , Next.js , TailwindCSS , Framer motion , GSAP ",
    image: "",
    category: "web",
    color: "#1E1E2E",
  },
];

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "web":
      return <Globe className="w-9 h-9" />;
    case "mobile":
      return <Code className="w-10 h-10" />;
    case "design":
      return <Palette className="w-8 h-8" />;
    default:
      return null;
  }
};

const ProjectCard = ({ project }: { project: any }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  const titleVariants = {
    rest: { y: 0 },
    hover: {
      y: -5,
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
    },
  };

  const router = useRouter();

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
        className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
        style={{
          // rotateX: rotate,
          opacity,
        }}
        whileHover={{ y: -5, boxShadow: "0 20px 30px rgba(0,0,0,0.2)" }}
      >
        <motion.div
          className="absolute inset-0 bg-zinc-800 opacity-40"
          initial={{ opacity: 0.4 }}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
        <div className="">
          <motion.div
            className="w-full object-cover "
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="flex flex-row items-center justify-between p-5 gap-2 ">
            <div className="flex  gap-3 items-center">
              <motion.div
                className=""
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
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
            <motion.button
              onClick={() =>
                router.push(
                  "https://github.com/sushil016/notewrite-edtech/tree/main/frontend-server"
                )
              }
              whileHover={{ scale: 1.1 }}
              className="mr-[75px]"
            >
              <Github className="w-10 h-10 text-iconColor" />
            </motion.button>
          </div>
        </div>

        <motion.button
          onClick={() =>
            router.push("https://sushilportfolio-sigma.vercel.app")
          }
          className="absolute top-4 right-4 rounded-full p-2 text-iconColor"
          whileHover={{ scale: 1.1 }}
        >
          <CategoryIcon category={project.category} />
        </motion.button>
        <div className=" top-0 left-0 right-0 p-8 gap-6 h-full">
          <motion.h3
            className=" sm:absolute text-3xl font-bold text-iconColor  sm:top-20 "
            variants={titleVariants}
            initial="rest"
            whileHover="hover"
          >
            {project.title}
          </motion.h3>
          <div className="h-auto">
            <li className=" text-textColor p-2 pt-[30px] ">
              {project.description}
            </li>
            <li className=" text-textColor p-2 ">{project.description2}</li>
            <li className=" text-textColor p-2 ">{project.description3}</li>
            <li className=" text-textColor p-2 ">{project.description4}</li>
          </div>
        </div>
        <div className=" bottom-0 left-0 right-0 px-10 pb-10 flex items-center gap-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
          >
            <Image
              src={Curlybracket}
              width={25}
              height={25}
              alt="Picture of the author"
            ></Image>
          </motion.div>
          <p className=" text-green-500">{project.tech}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default function ProjectSection() {
  // const [bgColor, setBgColor] = useState(projects[0].color)
  const containerRef = useRef(null);
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
      className="min-h-screen sm:py-20  px-4 sm:px-6 lg:px-8 bg-three"
      // animate={{ backgroundColor: bgColor }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-iconColor">
          {"< "}Code : Projects{" />"}
        </h2>
        <div className="gap-8 flex flex-col sm:w-2/3 justify-center h-full sm:ml-32 md:ml-40 lg:ml-64 ">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
