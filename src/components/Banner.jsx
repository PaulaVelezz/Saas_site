import ACME from '../assets/logos/acme.webp';
import CELESTIA from '../assets/logos/celestia.webp';
import ECHO from '../assets/logos/echo.webp';
import PULSE from '../assets/logos/pulse.webp';
import QUANTUM from '../assets/logos/quantum.webp';
import APEX from '../assets/logos/apex.webp';
import { motion } from 'framer-motion';

const logos = [ACME, CELESTIA, ECHO, PULSE, QUANTUM, APEX];

const Banner = () => {
  return (
    <section className='p-10 items-center'>
      <div className='flex overflow-hidden'>
        <motion.div initial={{ translateX: 0 }} animate={{ translateX: "-40%" }} transition={ { duration: 11, ease: "linear", repeat: Infinity }} 
          className='flex gap-16 flex-none pr-16'
        >
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="logo" className='w-auto h-8 flex-none'/>
          ))}
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="logo" className='w-auto h-8 flex-none'/>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Banner;