import CUBE1 from '../assets/images/cube-helix 1.webp';
import CUBE2 from '../assets/images/cube-helix.webp';
import { motion } from 'framer-motion';


const Features = () => {
  return (
    <section className='py-[50px] p-4'>
      <div className='flex flex-col justify-center items-center text-center'>
        <div>
          <span className='border border-zinc-400 rounded-lg py-1 px-3 font-medium'>Everything you need</span>
          <h2 className='text-center font-semibold text-5xl sm:text-7xl tracking-tight mt-8'>
            Streamlined for<br /> 
            <span className='bg-gradient-to-b from-[#010515] to-[#010d3e] text-transparent bg-clip-text [-webkit-background-clip:text]'>easy management</span>
          </h2>
          <p className='text-center font-medium text-xl mt-9 text-[#010d3e]'>
            Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10'>
          <motion.figure className='border border-zinc-400 rounded-lg shadow-lg flex flex-col p-6' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <img src={CUBE1} alt="cube" className='object-contain' />
            <figcaption className='text-center font-medium text-xl mt-9 text-[#010d3e]'>
              Integration ecosystem
            </figcaption>
            <p className='mt-4'>
              Enhance your productivity by connecting with your favorite tools, keeping all your
              essentials in one place.
            </p>
          </motion.figure>

          <motion.figure className='border border-zinc-400 rounded-lg shadow-lg flex flex-col p-6' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <img src={CUBE2} alt="cube" />
            <figcaption className='text-center font-medium text-xl mt-9 text-[#010d3e]'>
              Goal setting and tracking
            </figcaption>
            <p className='mt-4'>
            Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.
            </p>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}

export default Features;