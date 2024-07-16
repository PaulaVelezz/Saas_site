import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import LOGO from '../assets/logosaas.webp';
import X from '../assets/icons/Socials1.svg';
import Instagram from '../assets/icons/Socials6.svg';
import Pinterest from '../assets/icons/Socials2.svg';
import Linkedin from '../assets/icons/Socials4.svg';
import Tiktok from '../assets/icons/Socials3.svg';
import Youtube from '../assets/icons/Socials5.svg';

const Footer = () => {
  return (
    <footer className='bg-black text-white p-4 py-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2'>
        <div className='flex flex-col items-start gap-5'>

          <div className='relative'>
            <div className='absolute top-2 bottom-0 w-full bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FDBFE)] blur-md'></div>
            <img className='relative h-12 w-12' src={LOGO} alt="logo" />
          </div>

          <p className='max-w-sm'>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.</p>
          
          <ul className='flex flex-row items-center gap-4 mt-5'>
            <motion.li whileHover={{ scale: 1.2 }}>  <a href="https://www.twitter.com"><X /></a></motion.li>
            <motion.li whileHover={{ scale: 1.2 }}> <a href="https://www.instagram.com"> <Instagram /></a> </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}> <a href="https://www.pinterest.com"> <Pinterest /></a> </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}> <a href="https://www.linkedin.com"> <Linkedin /></a></motion.li>
            <motion.li whileHover={{ scale: 1.2 }}> <a href="https://www.tiktok.com"> <Tiktok /></a> </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}> <a href="https://www.youtube.com"> <Youtube /></a> </motion.li>
          </ul>
          
          <p className='py-3'>&#169; 2024 - Develop by <a href="https://www.github.com/PaulaVelezz">Paula Velez.</a></p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <div>
          <h3 className='text-xl font-semibold'>Product</h3>
          <ul className='mt-4'>
            <li> <Link to="/features">Features</Link> </li>
            <li> <Link to="/integrations">Integrations</Link> </li>
            <li> <Link to="/updates">Updates</Link> </li>
            <li> <Link to="/faq">FAQ</Link> </li>
            <li> <Link to="/pricing">Pricing</Link> </li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl font-semibold'>Company</h3>
          <ul className='mt-4'>
            <li> <a href="#">About</a> </li>
            <li> <a href="#">Blog</a> </li>
            <li> <a href="#">Careers</a> </li>
            <li> <a href="#">Manifesto</a> </li>
            <li> <a href="#">Contact</a> </li>
            <li> <a href="#">Press</a> </li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl font-semibold'>Resources</h3>
          <ul className='mt-4'>
            <li> <a href="#">Examples</a> </li>
            <li> <a href="#">Community</a> </li>
            <li> <a href="#">Guides</a> </li>
            <li> <a href="#">Docs</a> </li>
          </ul>
        </div>

          <div>
            <h3 className='text-xl font-semibold'>Legal</h3>
            <ul className='mt-4'>
              <li> <a href="#">Privacy</a> </li>
              <li> <a href="#">Terms</a> </li>
              <li> <a href="#">Security</a> </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;