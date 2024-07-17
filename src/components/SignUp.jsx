import { motion } from 'framer-motion';
import STAR from '../assets/images/emojistar.webp';
import HELIX from '../assets/images/helix.webp';

const SignUp = () => {
  return (
    <section className='py-20 flex flex-col gap-5 items-center'>
      <div className='max-w-xl relative'>
        <div>
          <img src={STAR} alt="star" className='absolute -top-[120px] right-[calc(100%+24px)]' />
          <img src={HELIX} alt="helix" className='absolute -top-7 left-[calc(100%+30px)]' />
        </div>

        <h2 className='bg-gradient-to-b from-[#010515] to-[#010d3e] text-transparent bg-clip-text [-webkit-background-clip:text] text-center font-semibold text-5xl sm:text-7xl tracking-tight mt-5'>
          Sign Up for free today
        </h2>
        <p className='text-center font-medium text-xl mt-9 text-[#010d3e]'>
        Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
        </p>
        <form className='mt-10 flex flex-col font-semibold gap-5 max-w-sm mx-auto sm:flex-row' action="">
          <input 
            type="email" 
            placeholder='your@email.com' 
            className='h-14 rounded-lg px-6 border-2 border-[#d1dbfd] flex-1 shadow-lg'
          />
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='shadow-lg py-2 px-4 rounded-lg bg-black text-[#efefef]'>Get started</motion.button>
        </form>
      </div>
    </section>
  )
}

export default SignUp;