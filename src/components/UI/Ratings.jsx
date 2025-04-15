import React from 'react';
import { FaStar, FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6";

const Ratings = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;

  return (
    <div className="rating-display">
      {[...Array(totalStars)]?.map((_, index) => {
        if (index < fullStars) {
          return <FaStar key={index} className="star filled" />;
        } else if (index === fullStars && decimalPart >= 0.5) {
          return <FaRegStarHalfStroke key={index} className="star half" />;
        } else {
          return <FaRegStar key={index} className="star empty" />;
        }
      })}
    </div>
  );
};

export default Ratings;