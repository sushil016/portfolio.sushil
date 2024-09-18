import React from "react";

const AboutMe = () => {
  return (
    <div className="flex bg-three md:flex-row flex-col gap-x-5 md:max-w-[100vw] min-h-auto md:p-20 justify-center items-center">
      <div className="text-four text-5xl font-bold flex justify-center items-center md:w-1/3 h-full">
        About Me
      </div>
      <div className="text-textColor text-xl font-semibold flex justify-center items-center md:w-2/3 w-full h-full p-5 text-center md:text-left">
        Hello, I'm a 2nd-year engineering student, coding since september 2023. rocking full-stack web
        development and DevOps like a pro. When I'm not coding, I'm probably
        debugging life's glitches. Always up for a challenge, I believe coffee
        and curiosity are the best combo for solving any problem!
      </div>
    </div>
  );
};

export default AboutMe;
