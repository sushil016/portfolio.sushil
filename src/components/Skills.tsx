import React from "react";
import { motion } from "framer-motion";
import { Svg } from "./ui/svg";
import { data } from "@/data/data";
import Image from "next/image";

const Skills = () => {
  return (
    <main className=" w-full h-full sm:py-8 bg-three">
      <div className="text-iconColor text-center text-4xl font-bold">
        {"< "}Code : Skills {"/>"}{" "}
      </div>
      <div className=" gap-4 sm:py-8 place-items-center sm:place-content-around items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 flex-wrap justify-center ">
        {data.skills.map((skill) => (
          <motion.li
            className="border shadow-xl p-2 rounded-md w-40 h-15 text-white flex justify-start items-center gap-2 pl-2 duration-200 "
            key={skill.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.75 }}
          >
            <Image src={skill.image} alt={skill.name} width={35} height={35} />
            <span className="text-textColor">{skill.name}</span>
          </motion.li>
        ))}
      </div>
    </main>
  );
};

export default Skills;
3;
