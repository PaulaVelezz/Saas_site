import Arrow from '../assets/icons/Arrow.svg'; 
import HERO_IMG from '../assets/images/Visual.webp';
import HERO_IMG_MD from '../assets/images/Visual_md.webp';
import CYLINDER from '../assets/images/cylinder 1.webp';

const Hero = () => {
  return (
    <section className='h-full md:h-screen text-black'>
      <div className='flex flex-col gap-8 items-start p-4'>
        <span className='border border-zinc-400 rounded-lg py-1 px-3 font-medium'>Version 2.0 is here</span>
        <div>
          <h1 className='text-7xl font-semibold text-left tracking-tight'>
            Pathway to  <br />
          </h1>
          <span className='text-7xl font-semibold text-left bg-gradient-to-b from-[#010515] to-[#010f46] text-transparent bg-clip-text [-webkit-background-clip:text]'>
            productivity
          </span>
        </div>
        
        <p className='text-xl text-[#010d3e]'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>

        <div className='flex items-center gap-4 font-medium'>
          <button className='py-2 px-4 rounded-lg bg-black text-[#efefef]'>Get for free</button>
          <button className='flex items-center gap-2 py-2 px-4'>Learn more  <Arrow /> </button>
        </div>
      </div>
      <div className='mt-8 flex items-center place-content-center p-4 md:hidden'>
        <img src={HERO_IMG} alt="hero image"/>
      </div>
      <div className='hidden md:block absolute top-24 right-0'>
        <img src={HERO_IMG_MD} alt="hero image"/>
      </div>
      <div className='hidden md:block absolute top-20 right-44'>
        <img src={CYLINDER} alt="cylinder" />
      </div>
    </section>
  )
}

export default Hero;