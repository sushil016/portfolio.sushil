"use client";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { motion } from "framer-motion";
import { useState } from "react";
import useMousePosition from "@/app/utils/mouseposition";
import { FooterComponent } from "./footer";
import ChatWidget from "./ChatWidget";


const LandingPage = () => {
  const { x, y } = useMousePosition();
  const [bgVariant, setBgVariant] = useState("default");

  const [cursorText, setCursorText] = useState("");

  const variants = {
    default: {
      x: x - 20,
      y: y - 20,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },

    navbarCursor: {
      opacity: 1,
      width: 60,
      height: 60,
      border: "none",
      backgroundColor: "#FFA500",
      mixBlendMode: "difference" as const,
      x: x - 30,
      y: y - 30,
    },
    nameCursor: {
      opacity: 1,
      width: 100,
      height: 100,
      // border:"none",
      backgroundColor: "#1E1E2E",
      mixBlendMode: "difference" as const,
      x: x - 50,
      y: y - 50,
      cursor: "none",
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return (
    <>
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-500 text-white px-4 py-2 rounded-md z-[100] focus:z-[100]"
      >
        Skip to main content
      </a>
      
      <div>
        <motion.div
          variants={variants}
          transition={spring}
          animate={bgVariant}
          className="cursor-none z-50 h-[40px] w-[40px] rounded-full border-2 border-orange-600 fixed top-0 left-0 pointer-events-none justify-center items-center shadow-lg shadow-violet-500"
          aria-hidden="true"
        > 
          <span className="text-white m-auto font-size-inherit flex justify-center items-center mt-9">
            {cursorText}
          </span>
        </motion.div>
      </div>
      <Navbar bgVariant={bgVariant} setBgVarient={setBgVariant} />
      <main role="main" id="main-content">
        <Home
          bgVariant={bgVariant}
          setBgVariant={setBgVariant}
          cursorText={cursorText}
          setCursorText={setCursorText}
        />
      </main>
      <FooterComponent/>
      <ChatWidget />
    </>
  );
};

export default LandingPage;