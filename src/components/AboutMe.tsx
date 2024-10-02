import Image from "next/image";
import React from "react";
import { ImageAi } from "./svgs";
import { GigAi } from "./svgs";

const AboutMe = () => {
  return (
    <div className="flex bg-three md:flex-row flex-col gap-x-5 md:max-w-[100vw] min-h-auto md:p-20 justify-center items-center">
      <div >
        <div className="text-four text-5xl font-bold flex justify-center items-center md:w-1/3 h-full">
          About Me
        </div>
      </div>
      <div className="text-textColor relative text-xl  font-semibold flex justify-center items-center md:w-2/3 w-full h-full p-5 text-center md:text-left">
        <p className="relative">Hello, I'm a 2nd-year engineering student, coding since september 2023.
        rocking full-stack web development and DevOps like a pro. When I'm not
        coding, I'm probably debugging life's glitches. Always up for a
        challenge, I believe coffee and curiosity are the best combo for solving
        any problem!</p>
        {/* <Image 
        className="absolute right-52 top-[1350px] opacity-85"
        src={ImageAi} width={200} height={200} alt="P"></Image> */}
        <Image 
        className="absolute right-0 top-[1450px] opacity-30"
        src={GigAi} width={300} height={300} alt="P"></Image>
        
      </div>
     
    </div>
  );
};

export default AboutMe;
