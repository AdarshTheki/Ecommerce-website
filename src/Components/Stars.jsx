import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

export default function Stars({ count, stars, color = '#F99417' }) {
  const ratings = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar color={color} />
        ) : stars >= number ? (
          <FaStarHalfAlt color={color} />
        ) : (
          <AiOutlineStar color={color} />
        )}
      </span>
    );
  });

  return (
    <div>
      {ratings} {stars} ({count} reviews)
    </div>
  );
}
