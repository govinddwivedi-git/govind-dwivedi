import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { FiGithub, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BiExpand } from "react-icons/bi";
import Stack from "../ui/Stack";

function Projects() {
  const stackRef = useRef(null);

  const handlePrev = () => {
    if (stackRef.current) stackRef.current.prev();
  };

  const handleNext = () => {
    if (stackRef.current) stackRef.current.next();
  };

  const handleGoTo = (index) => {
    if (stackRef.current) stackRef.current.goTo(index);
  };

  return (
    <section className="pt-20 pb-10 w-[90%] m-auto relative overflow-hidden" id="projects">
      {/* Background ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div 
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span 
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/30 text-yellow-300 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          ✨ Featured Work
        </motion.span>
        <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-slate-400 mt-4 text-lg max-w-md mx-auto">
          Drag cards freely or use navigation to explore
        </p>
      </motion.div>
      
      <div className="flex items-center justify-center min-h-[700px] w-full py-4 relative z-10">
        <div className="w-full max-w-[1000px] h-[550px] relative">
          <Stack
            ref={stackRef}
            sendToBackOnClick={true}
            cards={PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          />
        </div>
      </div>

      {/* Navigation controls */}
      <motion.div 
        className="flex flex-col items-center justify-center gap-4 text-slate-500 mt-1 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div 
          className="flex items-center gap-2 text-sm"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <BiExpand className="text-yellow-400" />
          <span>Drag anywhere to interact</span>
        </motion.div>
        
        {/* Navigation buttons and dots */}
        <div className="flex items-center gap-4">
          {/* Previous button */}
          <motion.button
            onClick={handlePrev}
            className="p-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/30 text-yellow-400 hover:from-yellow-500/30 hover:to-amber-500/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiChevronLeft className="text-xl" />
          </motion.button>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {PROJECTS.map((_, i) => (
              <motion.button 
                key={i}
                onClick={() => handleGoTo(i)}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(234,179,8,0.5)]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ delay: 0.1 * i }}
              />
            ))}
          </div>

          {/* Next button */}
          <motion.button
            onClick={handleNext}
            className="p-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/30 text-yellow-400 hover:from-yellow-500/30 hover:to-amber-500/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiChevronRight className="text-xl" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

const ProjectCard = ({ project }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const spotlightX = useTransform(mouseX, (v) => `${v}px`);
  const spotlightY = useTransform(mouseY, (v) => `${v}px`);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl h-full w-full cursor-grab active:cursor-grabbing"
      onMouseMove={handleMouseMove}
      style={{
        background: "linear-gradient(145deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.9) 100%)",
        boxShadow: "0 25px 50px -12px rgba(234,179,8,0.3), inset 0 1px 0 0 rgba(255,255,255,0.1)",
      }}
    >
      {/* Spotlight effect following cursor */}
      <motion.div
        className="absolute pointer-events-none w-[400px] h-[400px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle, rgba(234,179,8,0.15) 0%, transparent 60%)",
          left: spotlightX,
          top: spotlightY,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Border glow */}
      <div className="absolute inset-0 rounded-3xl border border-yellow-400/20 group-hover:border-yellow-400/40 transition-colors duration-500" />
      
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Floating tech badges - Right side vertical layout */}
      <div className="absolute top-5 right-5 bottom-20 flex flex-col gap-2 z-10 items-end">
        {project.techStack?.map((tech, index) => (
          <motion.span 
            key={index}
            className="text-xs text-white px-3 py-1.5 rounded-full font-medium backdrop-blur-xl border border-white/20 shadow-lg whitespace-nowrap"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)",
              WebkitBackdropFilter: "blur(16px)",
              backdropFilter: "blur(16px)",
            }}
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: index * 0.08, type: "spring", stiffness: 300 }}
            whileHover={{ 
              scale: 1.05, 
              x: -5,
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(234,179,8,0.3), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1)",
            }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <div className="transform transition-all duration-500 group-hover:-translate-y-2">
          {/* Project number */}
          <span className="text-7xl font-black text-white/30 absolute -top-4 right-6 select-none">
            {String(project.id).padStart(2, '0')}
          </span>
          
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            {project.name}
          </h3>
          <p className="text-slate-300/90 text-sm md:text-base leading-relaxed mb-6 max-w-lg line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
            {project.description}
          </p>
        </div>

        {/* Action buttons with stagger animation */}
        <div className="flex gap-3 flex-wrap">
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="text-lg" />
            <span>Source Code</span>
            <MdArrowOutward className="text-sm" />
          </motion.a>
          {project.isLive && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiOutlineExternalLink className="text-lg" />
              <span>{project.comingSoon ? "Coming Soon" : "Live Demo"}</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Premium corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-500/20 via-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </motion.div>
  );
};

export default Projects;
