import React from 'react';

const CardProductPrice = (props) => {
  return (
    <div className='card-contents-price'>
      <span>${props.price}</span>
    </div>
  )
};

export default CardProductPrice;
