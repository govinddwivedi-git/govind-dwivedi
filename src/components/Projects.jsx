import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import Stack from "../ui/Stack";

function Projects() {
  return (
    <section className="pt-20 w-[85%] m-auto" id="projects">
      <motion.h2 className="mb-8 text-center text-3xl lg:text-4xl font-bold" initial={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}} transition={{duration:0.8}}>Projects</motion.h2>
      
      <div className="flex items-center justify-center h-[650px] w-full">
        <div className="w-full max-w-[900px] h-[500px] relative">
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={true}
            cards={PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl flex flex-col md:block h-full w-full cursor-target"
              >
                <div className="relative w-full h-full">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-blue-900 py-2 px-3 flex flex-wrap gap-2 items-center justify-center">
                    {project.techStack && project.techStack.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs md:text-sm text-white px-3 py-1 rounded-full font-extralight shadow-lg hover:scale-105 transition-transform duration-200 border-[0.5px] border-blue-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Mobile view content */}
                <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/40 text-white">
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
                      {project.comingSoon ? <span>Coming Soon</span> : <span>Live</span>}
                        <MdArrowOutward />
                      </div>
                    </a>
                  )}
                </motion.div>
              </motion.div>
            ))}
          />
        </div>
      </div>
      <p className="text-center text-slate-400 mt-0">Click or swipe to browse projects</p>
    </section>
  );
}

export default Projects;
