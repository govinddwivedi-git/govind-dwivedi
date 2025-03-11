import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
function Projects() {
  return (
    <section className="pt-20 w-[90%] m-auto" id="projects">
      <motion.h2 className="mb-8 text-center text-3xl lg:text-4xl font-bold" initial={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}} transition={{duration:0.8}}>Projects</motion.h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={project.id}
            className="group relative overflow-hidden rounded-3xl flex flex-col md:block border border-slate-600"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image}
              alt={project.name}
              className="h-[200px] md:h-full w-full object-cover transition-transform duration-500 md:group-hover:scale-110"
            />
            {/* Mobile view content */}
            <div className="md:hidden flex flex-col items-center justify-center p-4 bg-black/20 text-white">
              <h3 className="mb-2 text-lg font-semibold text-center">{project.name}</h3>
              <p className="mb-4 text-sm text-center">{project.description}</p>
              <div className="flex flex-col gap-2 w-full items-center">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300 text-sm font-medium w-full text-center"
                >
                  <div className="flex items-center justify-center gap-1">
                    <span>View on Github</span>
                    <MdArrowOutward />
                  </div>
                </a>
                {project.isLive && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300 text-sm font-medium w-full text-center"
                  >
                    <div className="flex items-center justify-center gap-1">
                      <span>Live</span>
                      <MdArrowOutward />
                    </div>
                  </a>
                )}
              </div>
            </div>
            {/* Desktop view overlay */}
            <motion.div 
              initial={{opacity:0}}
              whileHover={{opacity:1}}
              transition={{duration:0.5}}
              className="absolute inset-0 hidden md:flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 bg-black/50"
            >
              <h3 className="mb-2 text-xl font-semibold px-2 text-center">{project.name}</h3>
              <p className="mb-8 px-4 text-base text-center leading-normal">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-black hover:bg-gray-300 text-base font-medium"
              >
                <div className="flex items-center gap-2">
                  <span>View on Github</span>
                  <MdArrowOutward />
                </div>
              </a>
              {project.isLive && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-black hover:bg-gray-300 mt-4 text-base font-medium"
                >
                  <div className="flex items-center gap-2">
                    <span>Live</span>
                    <MdArrowOutward />
                  </div>
                </a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
