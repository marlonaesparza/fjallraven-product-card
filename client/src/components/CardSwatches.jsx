import React from 'react';
import CardSwatch from './CardSwatch.jsx';

const CardSwatches = (props) => {
  return (
    <div className='card-contents-swatch-container'>
      {
        props.colors.map((color, i) => {
          return <CardSwatch key={i} i={i} currentSwatch={props.currentSwatch} color={color} handleSwatches={props.handleSwatches}/>
        })
      }
    </div>
  );
}

export default CardSwatches;
