import React from 'react';
import PropTypes from 'prop-types';


const TestimonialCard = ({ name, image, description }) => {

    TestimonialCard.propTypes = {
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    };

  return (
    <figure className="relative flex flex-col-reverse border-4 border-light-orange rounded-lg p-6 shadow-md">
      <figcaption className="flex flex-row items-center space-x-4">
        <div className="text-base text-gray-900 font-bold flex text-center items-center gap-1">
          <img
            className="flex-none w-12 h-12 rounded-full object-cover"
            src={image}
            alt={name}
            width={100}
            height={100}
          />
          <span>{name}</span>
        </div>
      </figcaption>
      <blockquote className="mt-6 text-gray-700">
        <p>{description}</p>
      </blockquote>
    </figure>
  );
};

export default TestimonialCard;