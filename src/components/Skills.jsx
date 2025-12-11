import React from "react";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";

import ElectricBorder from "../ui/ElectricBorder";

const iconVariants = {
  animate: {
    scale: [1, 1.15, 1],
    rotate: [0, -5, 5, -5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export default function Skills() {
  return (
    <div className="w-[90%] mx-auto" id="skills">
      <motion.h2
        className="mb-12 mt-20 text-center text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>
      {/* <ElectricBorder */}
        {/* color="#1cb2ba"
        speed={0.5}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16 }}
      > */}
        <motion.div
          className="mx-2 flex flex-col gap-12 rounded-3xl px-4 py-8 lg:px-20 border border-stone-50/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {Object.entries(SKILLS).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              className="skill-category"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 capitalize">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 rounded-xl border border-stone-50/10 cursor-target hover:border-stone-50/30 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div animate="animate" variants={iconVariants}>
                      {skill.icon}
                    </motion.div>
                    <h3 className="mt-2 text-center text-sm lg:text-lg">
                      {skill.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      {/* </ElectricBorder> */}
    </div>
  );
}
