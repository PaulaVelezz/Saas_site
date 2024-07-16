import TestimonialCard from './TestimonialCard';

const Testimonial = [
    {
        id: 1,
        name: 'Alex Rivera',
        user: '@jamietechguru00',
        image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
        description: 'As a seasoned designer always on the lookout for innovative tools. I was amazed at how quickly we were able to integrate this app into our workflow.',
    },
    {
        id: 2,
        name: 'Casey Jordan',
        user: '@caseyj',
        image: 'https://unavatar.io/github/jane',
        description: 'I was amazed at how quickly we were able to integrate this app into our workflow.',
    },
    {
        id: 3,
        name: 'Jordan Patels',
        user: '@jordanpatels',
        image: 'https://unavatar.io/github/mdo',
        description: 'Adopting this app for our team has streamlined our project management and improved communication across the board.',
    },
    {
        id: 4,
        name: 'Josh Smith',
        user: '@jjsmith',
        image: 'https://unavatar.io/github/jjsmith',
        description: 'Our team’s productivity has skyrocketed since we started using this tool.',
    },
    {
        id: 5,
        name: 'Taylor Kim',
        user: '@taylorkimm',
        image: 'https://unavatar.io/github/martha',
        description: 'Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.',
    },
    {
        id: 6,
        name: 'Sam Dawson',
        user: '@dawsontechtips',
        image: 'https://unavatar.io/github/harper',
        description: 'With this app, we can easily assign tasks, track progress, and manage documents all in one place.',
    },
    {
        id: 7,
        name: 'Morgan Lee',
        user: '@morganleewhiz',
        image: 'https://unavatar.io/github/morgan',
        description: 'The customizability and integration capabilities of this app are top-notch.',
    },
    {
        id: 8,
        name: 'Riley Smith',
        user: '@rileysmith1',
        image: 'https://unavatar.io/github/riley',
        description: 'This app has completely transformed how I manage my projects and deadlines.',
    },
    {
        id: 9,
        name: 'Casey Harper',
        user: '@casey09',
        image: 'https://unavatar.io/github/daine', 
        description: 'Its user-friendly interface and robust features support our diverse needs.',
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
                            user={item.user}
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