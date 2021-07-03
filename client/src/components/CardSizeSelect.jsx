import React from 'react';

const CardSizeSelect = (props) => {
  return (
    <div>
      <a href='#' className='card-contents-sizeguide-link'>Size Guide</a>
      <select name='sizes' id='sizes' data-testid='size-select' className='card-contents-sizes'>
        <option value="">Select a size</option>
        <option value='XS'>XS</option>
        <option value='S'>S</option>
        <option value='M'>M</option>
        <option value='L'>L</option>
        <option value='XL'>XL</option>
      </select>
    </div>
  );
};

export default CardSizeSelect;
