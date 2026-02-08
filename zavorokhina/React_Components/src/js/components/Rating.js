import React, { useState } from 'react';
import '../../scss/index.scss';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Rating({ value = 0, max = 5, onChange }) {
  const [hoverValue, setHoverValue] = useState(null);
  const [currentValue, setCurrentValue] = useState(value);

  const handleClick = (newValue) => {
    setCurrentValue(newValue);
    if (onChange) onChange(newValue);
  };

  const handleMouseEnter = (newValue) => setHoverValue(newValue);
  const handleMouseLeave = () => setHoverValue(null);

  return (
    <div className="rating">
      {[...Array(max)].map((_, index) => {
        const starValue = index + 1;
        const isFilled = hoverValue
          ? starValue <= hoverValue
          : starValue <= currentValue;

        return (
          <span
            key={starValue}
            className={`star ${isFilled ? 'filled' : ''}`}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

/* Rating Half Stars: */
/* MY TODO: fix the problem where one star is not added and the rating does not become a multiple of 0.5 */
// const RatingHalfStars = ({ value = 0, max = 5, onChange }) => {
//   const [hoverValue, setHoverValue] = useState(null);
//   const [currentValue, setCurrentValue] = useState(value);

//   const getStarType = (starIndex) => {
//     const starPosition = starIndex + 0.5;
//     if (hoverValue !== null) {
//       return hoverValue >= starPosition ? 'full' : hoverValue > starIndex ? 'half' : 'empty';
//     }
//     return currentValue >= starPosition ? 'full' : currentValue > starIndex ? 'half' : 'empty';
//   };

//   return (
//     <div className="rating-half">
//       {[...Array(max * 2)].map((_, i) => {
//         const starType = getStarType(Math.floor(i / 2));
//         if (i % 2 === 0) {
//           return starType === 'full' ? '★' : starType === 'half' ? '☆' : '☆';
//         } else {
//           return starType === 'full' || starType === 'half' ? '★' : '☆';
//         }
//       }).map((symbol, index) => (
//         <span
//           key={index}
//           className={`star ${symbol === '★' ? 'filled' : ''}`}
//           onClick={() => {
//             const newValue = Math.ceil((index + 1) / 2);
//             setCurrentValue(newValue);
//             if (onChange) onChange(newValue);
//           }}
//           onMouseEnter={() => setHoverValue((index + 1) / 2)}
//           onMouseLeave={() => setHoverValue(null)}
//         >
//           {symbol}
//         </span>
//       ))}
//     </div>
//   );
// };

// export default RatingHalfStars;

/* with font awesome: */
// library.add(faStar, faStarHalfAlt);

// const RatingIcons = ({ value = 0, max = 5, onChange }) => {
//   return (
//     <div className="rating-icons">
//       {[...Array(max)].map((_, index) => {
//         const starValue = index + 1;
//         const isFilled = value >= starValue;
//         const isHalf = !isFilled && value > index;

//         return (
//           <div
//             key={starValue}
//             className="star-icon"
//             onClick={() => onChange(starValue)}
//           >
//             {isFilled ? (
//               <FontAwesomeIcon icon="fa-star" />
//             ) : isHalf ? (
//               <FontAwesomeIcon icon="fa-star-half-alt" />
//             ) : (
//               <FontAwesomeIcon icon="fa-star" className="empty" />
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default RatingIcons;

