import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Svg } from "./ui/svg";
import { data } from "@/data/data";
import Image from "next/image";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <main id="skills" className="w-full h-full py-16 px-4 sm:px-6 lg:px-8 bg-three">
      <div className="max-w-7xl mx-auto">
        <div className="text-iconColor text-center text-3xl sm:text-4xl font-bold mb-12">
          {"< "}Code : Skills {"/>"}{" "}
        </div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 place-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.skills.map((skill, index) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.05}
                gyroscope={true}
              >
                <motion.div
                  className="relative rounded-xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-4 transition-all duration-300 w-40 h-20 flex justify-center items-center gap-3 group"
                  whileHover={{ 
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: `
                      8px 8px 16px rgba(0, 0, 0, 0.6),
                      -2px -2px 8px rgba(255, 255, 255, 0.1),
                      inset 1px 1px 2px rgba(255, 255, 255, 0.1),
                      inset -1px -1px 2px rgba(0, 0, 0, 0.3)
                    `,
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                  }}
                >
                  {/* Image container */}
                  <div className="relative flex-shrink-0">
                    <Image 
                      src={skill.image} 
                      alt={skill.name} 
                      width={32} 
                      height={32}
                      className="drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  
                  {/* Text */}
                  <span className="relative text-textColor text-sm font-medium group-hover:text-iconColor transition-colors duration-300 text-center leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Skills;
3;
