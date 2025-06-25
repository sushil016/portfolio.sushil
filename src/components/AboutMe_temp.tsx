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
        <div className="relative">
          <p className="relative mb-6">Hello, I'm a 3rd-year engineering student who started coding in September 2023, 
          now rocking full-stack web development and DevOps like a pro. Currently running my own web development 
          agency <span className="text-iconColor font-bold">LumaDev.in</span>, where I actively work with clients 
          to deliver cutting-edge web solutions and digital experiences.
          <br /><br />
          When I'm not coding or managing client projects, I'm probably debugging life's glitches. 
          Always up for a challenge, I believe coffee, curiosity, and client satisfaction are the 
          best combo for solving any problem!</p>
          
          {/* Active Status Section */}
          <div className="bg-gradient-to-r from-green-500/20 to-iconColor/20 border border-green-500/30 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-bold text-lg">Active Now</span>
            </div>
            <p className="text-four text-base">
              🚀 Currently accepting new projects at <span className="text-iconColor font-semibold">LumaDev.in</span>
              <br />
              💼 Available for web development, DevOps consulting, and full-stack solutions
              <br />
              📧 Ready to bring your ideas to life - let's build something amazing together!
            </p>
          </div>
          
          {/* <Image 
          className="absolute right-52 top-[1350px] opacity-85"
          src={ImageAi} width={200} height={200} alt="P"></Image> */}
          <Image 
          className="absolute right-0 top-[1450px] opacity-30"
          src={GigAi} width={300} height={300} alt="P"></Image>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
