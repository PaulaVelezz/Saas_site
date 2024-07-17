import PRODUCT_IMAGE from '../assets/images/Product Image.webp';
import ICON_PRODUCT_1 from '../assets/icons/icon-product1.svg';
import ICON_PRODUCT_2 from '../assets/icons/icon-product2.svg';
import ICON_PRODUCT_3 from '../assets/icons/icon-product3.svg';
import ICON_PRODUCT_4 from '../assets/icons/icon-product4.svg';
import Arrow from '../assets/icons/Arrow.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const GridInfo = [
  {
    id: 1,
    icon: <ICON_PRODUCT_1 />,
    title: 'Integration ecosystem',
    description: 'Track your progress and motivate your efforts everyday.',
    cta : 'Learn more', 
  },
  {
    id: 2,
    icon: <ICON_PRODUCT_2 />,
    title: 'Goal setting and tracking',
    description: 'Set and track goals with manageable task breakdowns.',
    cta : 'Learn more', 
  },
  {
    id: 3,
    icon: <ICON_PRODUCT_3 />,
    title: 'Secure data encryption',
    description: 'Ensure your data is safety with top-tier encryption.',
    cta : 'Learn more', 
  },
  {
    id: 4,
    icon: <ICON_PRODUCT_4 />,
    title: 'Customizable notifications',
    description: 'Get alerts on tasks and deadlines that matter most.',
    cta : 'Learn more', 
  },
];

const MainProduct = () => {
  const productImg = useRef(null);

  const { scrollYProgress } = useScroll({
    target : productImg,
    offset : ['start end', 'end end']
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section className='py-[50px] p-4 bg-gradient-to-b from-[#ffffff] to-[#d5deff] flex flex-col gap-10'>
      <div className='flex flex-col justify-center items-center text-center'>
        <div>
          <span className='border border-zinc-400 rounded-lg py-1 px-3 font-medium'>Boost your productivity</span>
          <h2 className='text-center font-semibold text-5xl sm:text-7xl tracking-tight mt-8'>
            A more effective way to <br /> 
            <span className='bg-gradient-to-b from-[#010515] to-[#010d3e] text-transparent bg-clip-text [-webkit-background-clip:text]' >track progress</span>
          </h2>
          <p className='text-center font-medium text-xl mt-9 text-[#010d3e]'>
            Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website 
            in just minutes with the set of free components for Framer.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <img ref={productImg} src={PRODUCT_IMAGE} alt="screen shot" className='mt-10' />
        </motion.div>
      </div>

      <div className='flex flex-col flex-wrap items-center justify-center sm:flex-row gap-10 py-14 mt-12'>
        {GridInfo.map((item) => (
          <div key={item.id} className='w-[260px]'>
            <div className='flex flex-col justify-center gap-3 py-10 px-4 text-left sm:flex-1'>
              {item.icon}
              <h3 className='font-semibold'>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#" className='flex items-center gap-2 font-semibold hover:underline'>
                {item.cta}
                <Arrow />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MainProduct;