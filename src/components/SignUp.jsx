import Arrow from '../assets/icons/Arrow.svg';
import { motion } from 'framer-motion';
import STAR from '../assets/images/emojistar.webp';
import HELIX from '../assets/images/helix.webp';

const SignUp = () => {
  return (
    <section className='py-[50px] flex flex-col gap-5 items-center'>
      <div>
        <h2 className='bg-gradient-to-b from-[#010515] to-[#010d3e] text-transparent bg-clip-text [-webkit-background-clip:text] text-center font-semibold text-5xl sm:text-7xl tracking-tight mt-5'>
          Sign Up for free today
        </h2>
        <p className='text-center font-medium text-xl mt-9 text-[#010d3e]'>
        Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
        </p>
      </div>
      <div className='flex gap-5 mt-5'>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='py-2 px-4 rounded-lg bg-black text-[#efefef]'>Get for free</motion.button>
        <motion.button whileHover={{ scale: 1.1 }} className='flex items-center gap-2 py-2 px-4 border border-zinc-500 rounded-lg'>Learn more  <Arrow /> </motion.button>
      </div>

      <div>
        <img src={STAR} alt="star" />
        <img src={HELIX} alt="helix" />
      </div>
    </section>
  )
}

export default SignUp;