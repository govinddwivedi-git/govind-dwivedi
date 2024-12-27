import { motion } from "framer-motion";
import logo from "../assets/logo325.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Contact = () => {
  return (
    <div className="mb-8 mt-20" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-bold tracking-tighter mb-5"
      >
        Let's Connect
      </motion.h2>
      <div className="flex items-center justify-center gap-8 mb-10">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full px-4 mt-7"
      >
        <div className="border-b border-gray-600 w-full max-w-[1200px] mx-auto"></div>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto py-6 ">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img src={logo} alt="Logo" className="w-[150px] mb-4 md:mb-0" initial={{opacity:0}} 
            whileInView={{opacity:1}} transition={{duration:0.5}}
            />
          </motion.a>
          <p className="text-center text-sm tracking-wide text-gray-500 ml-3">
            © {new Date().getFullYear()} Govind Dwivedi. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
