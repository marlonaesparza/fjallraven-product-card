import React from 'react';
import CardTop from './CardTop.jsx';
import CardProductTitle from './CardProductTitle.jsx';
import CardProductPrice from './CardProductPrice.jsx';
import CardProductColor from './CardProductColor.jsx';
import CardSwatches from './CardSwatches.jsx';
import CardSizeSelect from './CardSizeSelect.jsx';
import CardCartButton from './CardCartButton.jsx';

const CardContents = (props) => {
  return (
    <div className='card-contents-container'>
      <div className='card-contents'>
        <CardTop type={props.type} rating={props.rating}/>
        <CardProductTitle title={props.title}/>
        <CardProductPrice price={props.price}/>
        <CardProductColor currentColor={props.currentColor}/>
        <CardSwatches currentSwatch={props.currentSwatch} colors={props.colors} handleSwatches={props.handleSwatches}/>
        <CardSizeSelect/>
        <CardCartButton/>
      </div>
    </div>
  );
};

export default CardContents;
