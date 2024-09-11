"use client"
import LandingPage from "@/components/portfolio";
import {motion} from 'framer-motion'
import useMousePosition from "./utils/mouseposition";
import { useState } from "react";


export default function Home() {

  const {x,y} = useMousePosition();
  const [bgVariant , setBgVarient] = useState("default")


  const varients = {
    default: {
      x:x-20,
      y:y-20,
      webkitmaskPosition:true
    },

    navbarCursor:{
      opacity:1,
      width:80,
      height:80,
      backgroundcolor:"#fff",
      x:x-40,
      y:y-40,
    }

  }

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28
  };
  
  return (
    <>
    <motion.div variants={varients} transition={spring} animate="default"  className="cursor-none h-[40px] w-[40px] rounded-full bg-orange-600 fixed top-0 left-0"/>
    <LandingPage/>
    </>
   
  );
}
