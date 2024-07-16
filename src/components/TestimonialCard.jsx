import React from 'react';
import PropTypes from 'prop-types';


const TestimonialCard = ({ name, user, image, description }) => {

  TestimonialCard.propTypes = {
    name: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    <figure className="relative flex flex-col-reverse border-2 border-[#d1dbfd] rounded-lg py-10 px-8 shadow-lg gap-5">
      <figcaption className="flex flex-row items-center space-x-4">
        <div className="text-base text-gray-900 flex text-center items-center gap-3">
          <img
            className="flex-none w-12 h-12 rounded-full object-cover"
            src={image}
            alt={name}
            width={100}
            height={100}
          />
          <div className='flex flex-col items-start'>
            <span className="font-bold">{name}</span>
            <span>{user}</span>
          </div>
        </div>
      </figcaption>
      <blockquote className="text-lg font-medium">
        <p>{description}</p>
      </blockquote>
    </figure>
  );
};

export default TestimonialCard;