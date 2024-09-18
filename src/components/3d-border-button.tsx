"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function BorderButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
      <motion.button
        className="relative px-8 py-4 text-lg font-bold text-white rounded-lg overflow-hidden"
        style={{
          background: isHovered
            ? "linear-gradient(45deg, #FF416C, #FF4B2B)"
            : "linear-gradient(45deg, #7928CA, #FF0080)",
           boxShadow: isHovered
             ? "6px 6px 0 rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2)"
            : "4px 4px 0 rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.1)",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.span
          className="relative z-10 block"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -2 : 0 }}
        >
          skills hain
        </motion.span>
        <motion.div
          className="absolute inset-0  h-full"
          style={{
           // background: "linear-gradient(45deg, rgba(0,0,0,0.2), rgba(0,0,0,0.4))",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          animate={{
            clipPath: isHovered
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(0 0, 100% 0, calc(100% - 6px) calc(100% - 6px), 0 100%)",
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          className="absolute inset-0 w-full h-full rounded-xl"
          style={{
            zIndex: -1,
            background: "linear-gradient(45deg, #00FA9A, #00D9F5)",
            filter: "blur(20px)",
          }}
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{
            opacity: isHovered ? 0.8 : 0.5,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </div>
  )
}