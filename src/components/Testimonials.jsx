import TestimonialCard from './TestimonialCard';

const Testimonial = [
    {
        id: 1,
        name: 'John Doe',
        image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 2,
        name: 'Jane Doe',
        image: 'https://unavatar.io/github/jane',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 3,
        name: 'John Doe',
        image: 'https://unavatar.io/github/mdo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];

const Testimonials = () => {
  return (
    <section className='py-[50px] p-4'>
        <div className='flex flex-col items-center'>
            <span className='border border-zinc-400 rounded-lg py-1 px-3 font-medium'>Testimonials</span>
            <h2 className='bg-gradient-to-b from-[#010515] to-[#010d3e] text-transparent bg-clip-text [-webkit-background-clip:text] text-center font-semibold text-5xl sm:text-7xl tracking-tight mt-5'>
                What our users say
            </h2>
        </div>
    
        <div className="flex-1 max-w-full mx-auto p-10">
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-5">
                {Testimonial.map((item, index) => (
                    <li key={index}>
                        <TestimonialCard 
                            key={index} 
                            name={item.name} 
                            image={item.image} 
                            description={item.description}
                        />
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Testimonials;