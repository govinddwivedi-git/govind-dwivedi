import { HERO } from "../constants";
import  govindImg  from "../assets/govind.png";
import { motion} from "framer-motion";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center w-[95%] m-auto">
      <motion.div className="w-full md:w-1/2" initial = {{ opacity: 0 , x:-50}}
        animate = {{ opacity: 1 , x:0}}
        transition = {{duration : 1}}>
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[5rem] gradient-text">
          {HERO.name}
        </h2>
        <div className="flex items-center"
        >
          
          <p className="p-2 text-3xl font-bold tracking-tighter text-yellow-300 lg:text-4xl">
            {HERO.greet}
          </p>
          <span className="text-3xl lg:text-4xl">👋🏻</span>
        </div>
        <p className="mb-8 p-2 text-xl text-slate-400 font-semibold">{HERO.description}</p>
      </motion.div>
      <motion.div className="w-full md:w-1/2 lg:p-8" initial = {{ opacity: 0 , scale:0.8}} animate = {{ opacity: 1 , scale:1}} transition = {{duration : 1}}>
        <div className="flex justify-center">
          <motion.img className="rounded-3xl mt-4" src={govindImg} width={550} height={550} alt="Govind Dwivedi" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} />
        </div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
