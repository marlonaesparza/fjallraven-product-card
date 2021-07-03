import React from 'react';
import ThumbSlider from './ThumbSlider.jsx';
import MainSlider from './MainSlider.jsx';

const RootSlider = (props) => {
  let imagesCount = props.images.length;
  let thumbImages = props.images.slice(0, imagesCount/2);
  let mainImages = props.images.slice(imagesCount/2);

  return (
    <div className='root-slider-container'>
      <ThumbSlider images={thumbImages} title={props.title} handleThumbs={props.handleThumbs}/>
      <MainSlider images={mainImages} title={props.title} position={props.sliderPosition} positionMax={props.sliderPositionMax} handleCarousel={props.handleCarousel}/>
    </div>
  );
};

export default RootSlider;
