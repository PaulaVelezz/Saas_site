import Arrow from '../assets/icons/Arrow.svg'; 
import HERO_IMG from '../assets/images/Visual.webp';
import HERO_IMG_MD from '../assets/images/Visual_md.webp';
import CYLINDER from '../assets/images/cylinder 1.webp';
import TORUS from '../assets/images/half-torus.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className='h-full md:h-screen text-black'
     >
      <div className='flex flex-col gap-10 items-start p-4'>
        <span className='border border-zinc-400 rounded-lg py-1 px-3 font-medium'>Version 2.0 is here</span>
        <div>
          <h1 className='text-7xl lg:text-8xl md:font-bold font-semibold text-left tracking-tight'>
            Pathway to  <br />
          </h1>
          <span className='text-7xl lg:text-8xl font-semibold md:font-bold text-left bg-gradient-to-b from-[#010515] to-[#010f46] text-transparent bg-clip-text [-webkit-background-clip:text]'>
            productivity
          </span>
        </div>
        
        <p className='max-w-3xl md:max-w-xl text-xl lg:text-[22px] text-[#010d3e]'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>

        <div className='flex items-center gap-4 font-medium'>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='py-2 px-4 rounded-lg bg-black text-[#efefef]'>Get for free</motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className='flex items-center gap-2 py-2 px-3 border border-[#0c0f17] rounded-lg'>Learn more  <Arrow /> </motion.button>
        </div>
      </div>
      <div className='mt-8 flex items-center place-content-center p-4 md:hidden'>
        <img src={HERO_IMG} alt="hero image"/>
      </div>
      <div className='hidden md:block absolute top-24 right-0'>
        <img src={HERO_IMG_MD} alt="hero image" className='h-[650px]'/>
      </div>
      <div className='hidden md:block absolute top-20 right-44'>
        <img src={CYLINDER} alt="cylinder" />
      </div>
      <div className='hidden lg:block absolute bottom-0 right-80'>
        <img src={TORUS} alt="torus" />
      </div>
    </motion.section>
  )
}

export default Hero;