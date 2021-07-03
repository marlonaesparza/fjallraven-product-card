import React from 'react';
import Thumb from './Thumb.jsx';

const ThumbSlider = (props) => {
  let images = props.images;

  return (
    <div className='thumb-slider-container' data-testid='thumb-slider'>
      <div className='thumb-slider'>
        {images.map((image, i) => {
          return <img key={i} id={i} src={image} className='thumb-img' alt={props.title} onClick={props.handleThumbs}/>;
        })}
      </div>
    </div>
  );
};

export default ThumbSlider;
