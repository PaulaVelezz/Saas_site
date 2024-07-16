import Check from '../assets/icons/Check.svg';
import PropTypes from 'prop-types';

const PriceCard = ({ title, sub, price, button, features, middle }) => {

    PriceCard.propTypes = {
        title: PropTypes.string.isRequired,
        sub: PropTypes.string,
        price: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired,
        middle: PropTypes.bool,
    };

  return (
    <div className={`flex flex-col shadow-xl rounded-lg p-10 max-w-[420px] h-auto ${middle ? 'bg-black , text-white' : 'bg-white'}`} >
        <div className='flex flex-col gap-7'>
            <div className='flex flex-row justify-between'>
                <h3 className='font-bold text-zinc-500'>{title}</h3>
                <span className='bg-[linear-gradient(to_right,#f376fa,#FFDD99,#C3F0B2,#43c8e6,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text] border border-zinc-400 rounded-lg py-1 px-3 font-semibold'>
                    {sub}
                </span>
            </div>
            <p className='text-5xl font-bold'>{price} <span className='text-zinc-500 text-2xl font-semibold'>/monthly</span></p>
            <button className={`text-[#efefef] hover:opacity-85 font-medium py-2 px-4 rounded-lg ${middle ? 'bg-white , text-black' : 'bg-black'}`}>{button}</button>
            <ul>
                {features.map((feature, index) => (
                    <li key={index} className='font-normal flex gap-2 p-3'> 
                        <Check className='h-6' />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default PriceCard;