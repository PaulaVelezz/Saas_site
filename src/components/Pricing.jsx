import PriceCard from "./PriceCard";

const PricingData = [
  {
    title: "Free",
    sub: "",
    price: "$0",
    button: "Get started for free",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB of storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    sub: "Most Popular",
    price: "$9",
    button: "Sign up now",
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "200GB of storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    sub: "",
    price: "$19",	
    button: "Sign up now",
    features: [
      "Up to 100 project members",
      "Unlimited tasks and projects",
      "500GB of storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-[50px] p-4 bg-gradient-to-b from-[#d6dfff] to-[#516ece]">
      <div className="flex flex-col justify-center items-center">
        <span className='border border-zinc-400 rounded-lg py-1 px-3 font-medium'>Boost your productivity</span>
        <h2 className='text-center font-semibold text-5xl sm:text-7xl tracking-tight mt-8'>
            A more effective way to<br /> 
            <span className='bg-gradient-to-b from-[#010515] to-[#010d3e] text-transparent bg-clip-text [-webkit-background-clip:text]'>track progress</span>
          </h2>
          <p className='text-center font-medium text-xl mt-9 text-[#010d3e]'>
          Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.
          </p>
      </div>
      <div className="flex justify-center flex-wrap mt-12 gap-11">
        {PricingData.map((price, index) => (
          <PriceCard 
            key={index} 
            title={price.title} 
            sub={price.sub}
            price={price.price} 
            button={price.button} 
            features={price.features} 
            middle={index === 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;