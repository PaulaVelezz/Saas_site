import LOGO from '../assets/logosaas.webp';
import Bar from '../assets/icons/Bar.svg'; 
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        <div className='flex flex-row items-center justify-between gap-5'>
            <div className='relative'>
                <div className='absolute top-2 bottom-0 w-full bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FDBFE)] blur-md'></div>
                <img src={LOGO} alt="saas_logo" className='h-12 w-12 relative' />
            </div>
            <div className='sm:hidden border border-black rounded-lg p-2'>
                <Bar />
            </div>
        </div>
        <nav className='hidden sm:flex'>
            <ul className='flex gap-6 items-center text-[#5e5f66]'>
                <motion.li whileHover={{ scale: 1.1 }}><Link to = "/"> About </Link></motion.li>
                <motion.li whileHover={{ scale: 1.1 }}><Link to = "/features"> Features </Link></motion.li>
                <motion.li whileHover={{ scale: 1.1 }}><Link to = "/customers"> Customers</Link></motion.li>
                <motion.li whileHover={{ scale: 1.1 }}><Link to = "/updates"> Updates </Link></motion.li>
                <motion.li whileHover={{ scale: 1.1 }}><Link to = "/help"> Help </Link></motion.li>   
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='py-2 px-4 rounded-lg bg-black text-[#efefef]'>Get for free</motion.button>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;