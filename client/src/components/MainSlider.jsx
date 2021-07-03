import React from 'react';

const MainSlider = (props) => {
  let images = props.images;
  let position = props.position;
  let positionMax = props.positionMax;

  if (positionMax === 0) {
    return (
      <div className='main-slider-container'  data-testid='main-slider'>
        <div className='main-slider-carousel-track-container'>
          <ul className='main-slider-carousel-track' style={{left: `-${position}px`}}>
            {images.map((image, i) => {
              return <li key={i} className='main-slider-carousel-slide' style={{left: `${620 * i}px`}} ><img src={image} className='main-img' alt={props.title}/></li>;
            })}
          </ul>
        </div>
      </div>
    );

  } else if (position === 0) {
    return (
      <div className='main-slider-container'  data-testid='main-slider'>
        <div className='main-slider-carousel-track-container'>
          <ul className='main-slider-carousel-track' style={{left: `-${position}px`}}>
            {images.map((image, i) => {
              return <li key={i} className='main-slider-carousel-slide' style={{left: `${620 * i}px`}} ><img src={image} className='main-img' alt={props.title}/></li>;
            })}
          </ul>
        </div>
        <i id='next' className="carousel-button carousel-b-next fas fa-chevron-right" onClick={props.handleCarousel}></i>
      </div>
    );

  } else if (position === positionMax) {
    return (
      <div className='main-slider-container'  data-testid='main-slider'>
        <div className='main-slider-carousel-track-container'>
          <ul className='main-slider-carousel-track' style={{left: `-${position}px`}}>
            {images.map((image, i) => {
              return <li key={i} className='main-slider-carousel-slide' style={{left: `${620 * i}px`}} ><img src={image} className='main-img' alt={props.title}/></li>;
            })}
          </ul>
        </div>
        <i id='previous' className='carousel-button carousel-b-previous fas fa-chevron-left' onClick={props.handleCarousel}></i>
      </div>
    );

  } else {
    return (
      <div className='main-slider-container' data-testid='main-slider'>
        <div className='main-slider-carousel-track-container'>
          <ul className='main-slider-carousel-track' style={{left: `-${position}px`}}>
            {images.map((image, i) => {
              return <li key={i} className='main-slider-carousel-slide' style={{left: `${620 * i}px`}} ><img src={image} className='main-img' alt={props.title}/></li>;
            })}
          </ul>
        </div>
        <i id='previous' className='carousel-button carousel-b-previous fas fa-chevron-left' onClick={props.handleCarousel}></i>
        <i id='next' className='carousel-button carousel-b-next fas fa-chevron-right' onClick={props.handleCarousel}></i>
      </div>
    );
  }
};

export default MainSlider;
