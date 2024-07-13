import LOGO from '../assets/logosaas.webp';
import Bar from '../assets/icons/Bar.svg'; 
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center justify-between'>
            <div className='relative'>
                <div className='absolute top-2 bottom-0 w-full bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FDBFE)] blur-md'></div>
                <img src={LOGO} alt="saas_logo" className='h-12 w-12 relative' />
            </div>
            <div className='sm:hidden'>
                <Bar />
            </div>
        </div>
        <nav className='hidden sm:flex'>
            <ul className='flex gap-6 items-center text-[#5e5f66]'>
                <li><Link to = "/"> About </Link></li>
                <li><Link to = "/features"> Features </Link></li>
                <li><Link to = "/customers"> Customers</Link></li>
                <li><Link to = "/updates"> Updates </Link></li>
                <li><Link to = "/help"> Help </Link></li>   
                <button className='py-2 px-4 rounded-lg bg-black text-[#efefef]'>Get for free</button>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;