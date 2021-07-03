import React from 'react';

const CardSwatch = (props) => {
  let divStyle = props.i === props.currentSwatch ? {border: `2px solid ${props.color}`} : {};

  return (
    <div className='card-contents-swatch' style={divStyle}>
      <span id={props.i} data-testid='swatch' className='swatch' style={{backgroundColor: `${props.color}`}} onClick={props.handleSwatches}></span>
    </div>
  );
}

export default CardSwatch;
