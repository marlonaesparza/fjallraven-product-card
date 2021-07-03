import React from 'react';

const CardProductReview = (props) => {
  let stars = [];

  for (let i = 0; i < props.rating; i++) {
    let solidStar = <i key={i} className="fas fa-star"></i>;
    stars.push(solidStar);
  }

  for (let i = 0; i < Math.abs(props.rating - 5); i++) {
    let blankStar = <i key={i} className="far fa-star"></i>;
    stars.push(blankStar);
  }

  return (
    <div className='card-contents-review'>
      {stars}<span className='star-rating'>({props.rating})</span>
    </div>
  );
};

export default CardProductReview;
