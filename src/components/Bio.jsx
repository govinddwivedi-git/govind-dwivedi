import React from "react";
import { BIO } from "../constants/index";
import { motion } from "framer-motion";

export default function Bio() {
  return (
    <motion.section 
      className="flex max-w-4xl flex-col gap-12 pt-20" 
      id="bio"
      initial={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}} 
      transition={{duration:0.8}}
    >
      <motion.h2 
        className="text-center text-3xl lg:text-4xl font-bold"
      >
        Bio
      </motion.h2>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:0.2}}>
        {BIO.map((bio, index) => (
          <motion.p 
          initial={{opacity:0,x:-20}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.8,delay:0.5*index}}

          key={index} className="mb-4 text-lg lg:text-xl">
            {bio}
          </motion.p>
        ))}
      </motion.div>
    </motion.section>
  );
}
