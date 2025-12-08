import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const spotlightX = useTransform(mouseX, (v) => `${v}px`);
  const spotlightY = useTransform(mouseY, (v) => `${v}px`);

  const handleMouseMove = (e) => {
    if (isMobile) return; // Skip on mobile
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
        boxShadow: isMobile 
          ? "0 15px 30px -10px rgba(234,179,8,0.2)"
          : "0 25px 50px -12px rgba(234,179,8,0.3), inset 0 1px 0 0 rgba(255,255,255,0.1)",
      }}
    >
      {/* Spotlight effect - only on desktop */}
      {!isMobile && (
        <motion.div
          className="absolute pointer-events-none w-[400px] h-[400px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle, rgba(234,179,8,0.15) 0%, transparent 60%)",
            left: spotlightX,
            top: spotlightY,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {/* Border glow */}
      <div className="absolute inset-0 rounded-3xl border border-yellow-400/20 group-hover:border-yellow-400/40 transition-colors duration-500" />
      
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.name}
          className={`h-full w-full object-cover ${isMobile ? '' : 'transition-all duration-700 group-hover:scale-105'}`}
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/30" />
        {!isMobile && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
      </div>

      {/* Floating tech badges - Horizontal on mobile, vertical on desktop */}
      <div className={`absolute z-10 ${isMobile ? 'top-3 left-3 right-3 flex flex-wrap gap-1.5' : 'top-5 right-5 bottom-20 flex flex-col gap-2 items-end'}`}>
        {project.techStack?.slice(0, isMobile ? 4 : undefined).map((tech, index) => (
          <motion.span 
            key={index}
            className={`text-white font-medium backdrop-blur-md border border-white/20 shadow-lg whitespace-nowrap ${isMobile ? 'text-[10px] px-2 py-1 rounded-md' : 'text-xs px-3 py-1.5 rounded-full'}`}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              boxShadow: isMobile 
                ? "0 4px 16px rgba(0, 0, 0, 0.2)"
                : "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)",
              WebkitBackdropFilter: "blur(16px)",
              backdropFilter: "blur(16px)",
            }}
            initial={isMobile ? { opacity: 1 } : { opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={isMobile ? { duration: 0 } : { delay: index * 0.08, type: "spring", stiffness: 300 }}
            whileHover={isMobile ? {} : { 
              scale: 1.05, 
              x: -5,
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(234,179,8,0.3), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1)",
            }}
          >
            {tech}
          </motion.span>
        ))}
        {isMobile && project.techStack?.length > 4 && (
          <span className="text-[10px] text-white/70 px-2 py-1 rounded-md backdrop-blur-md border border-white/10" style={{ background: "rgba(255,255,255,0.05)" }}>
            +{project.techStack.length - 4}
          </span>
        )}
      </div>

      {/* Content */}
      <div className={`absolute inset-0 flex flex-col justify-end ${isMobile ? 'p-4' : 'p-6 md:p-8'}`}>
        <div className={`${isMobile ? '' : 'transform transition-all duration-500 group-hover:-translate-y-2'}`}>
          {/* Project number - hidden on mobile */}
          {!isMobile && (
            <span className="text-7xl font-black text-white/30 absolute -top-4 right-6 select-none">
              {String(project.id).padStart(2, '0')}
            </span>
          )}
          
          <h3 className={`font-bold text-white tracking-tight ${isMobile ? 'text-xl mb-2' : 'text-2xl md:text-4xl mb-3'}`}>
            {project.name}
          </h3>
          <p className={`text-slate-300/90 leading-relaxed mb-4 ${isMobile ? 'text-xs line-clamp-2' : 'text-sm md:text-base mb-6 max-w-lg line-clamp-2 group-hover:line-clamp-none transition-all duration-500'}`}>
            {project.description}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 md:gap-3 flex-wrap">
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            className={`flex items-center gap-1.5 md:gap-2 rounded-full bg-white text-slate-900 font-semibold shadow-lg ${isMobile ? 'px-3 py-2 text-xs' : 'px-5 py-2.5 text-sm hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95'}`}
            whileHover={isMobile ? {} : { y: -2 }}
            whileTap={isMobile ? {} : { scale: 0.95 }}
          >
            <FiGithub className={isMobile ? 'text-sm' : 'text-lg'} />
            <span>{isMobile ? 'Code' : 'Source Code'}</span>
            {!isMobile && <MdArrowOutward className="text-sm" />}
          </motion.a>
          {project.isLive && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              className={`flex items-center gap-1.5 md:gap-2 rounded-full font-semibold text-slate-900 shadow-lg ${isMobile ? 'px-3 py-2 text-xs' : 'px-5 py-2.5 text-sm transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95'}`}
              style={{
                background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
              }}
              whileHover={isMobile ? {} : { y: -2 }}
              whileTap={isMobile ? {} : { scale: 0.95 }}
            >
              <HiOutlineExternalLink className={isMobile ? 'text-sm' : 'text-lg'} />
              <span>{project.comingSoon ? "Soon" : (isMobile ? "Live" : "Live Demo")}</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Premium corner accent - only on desktop */}
      {!isMobile && (
        <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-500/20 via-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      )}
    </motion.div>
  );
};

export default Projects;
