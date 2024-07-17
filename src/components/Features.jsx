import CUBE1 from '../assets/images/cube-helix_1-t.webp';
import CUBE2 from '../assets/images/cube-helix-t.webp';
import { motion } from 'framer-motion';


const Features = () => {

  return (
    <section className='pt-20 p-4'>
      <div className='flex flex-col justify-center items-center text-center'>
        <div>
          <span className='border border-zinc-400 rounded-lg py-1 px-3 font-medium'>Everything you need</span>
          <h2 className='text-center font-semibold text-5xl sm:text-7xl tracking-tight mt-8'>
            Streamlined for<br /> 
            <span className='bg-gradient-to-b from-[#010515] to-[#010d3e] text-transparent bg-clip-text [-webkit-background-clip:text]'>easy management</span>
          </h2>
          <p className='text-center font-medium text-xl mt-10 text-[#010d3e] max-w-6xl'>
            Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className='grid grid-cols-1 sm:grid-cols-2 gap-11 mt-10'
        >
          <figure className='max-w-md border-2 border-[#d1dbfd] rounded-lg shadow-xl flex flex-col p-6'>
            <img src={CUBE1} alt="cube" className='object-contain' />
            <figcaption className='text-center font-medium text-xl mt-9 text-[#010d3e]'>
              Integration ecosystem
            </figcaption>
            <blockquote className='mt-4'>
              Enhance your productivity by connecting with your favorite tools, keeping all your
              essentials in one place.
            </blockquote>
          </figure>

          <figure className='max-w-md border-2 border-[#d1dbfd] rounded-lg shadow-xl flex flex-col p-6'>
            <img src={CUBE2} alt="cube" />
            <figcaption className='text-center font-medium text-xl mt-9 text-[#010d3e]'>
              Goal setting and tracking
            </figcaption>
            <blockquote className='mt-4'>
            Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.
            </blockquote>
          </figure>
        </motion.div>
      </div>
    </section>
  )
}

export default Features;