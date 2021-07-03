import React from 'react';
import {render, screen} from '@testing-library/react';

import RootSlider from '../RootSlider.jsx';

it('Renders both ThumbSlider and MainSlider', () => {
  const title = 'ABISKO MIDSUMMER JACKET M';
  const images = ["https://fjallraven-card-images.s3-us-west-2.amazonaws.com/ABISKO_MIDSUMMER_JACKET_M/ABISKO_MIDSUMMER_JACKET_M_001.jpg", "https://fjallraven-card-images.s3-us-west-2.amazonaws.com/ABISKO_MIDSUMMER_JACKET_M/ABISKO_MIDSUMMER_JACKET_M_002.jpg", "https://fjallraven-card-images.s3-us-west-2.amazonaws.com/ABISKO_MIDSUMMER_JACKET_M/ABISKO_MIDSUMMER_JACKET_M_003.jpg", "https://fjallraven-card-images.s3-us-west-2.amazonaws.com/ABISKO_MIDSUMMER_JACKET_M/ABISKO_MIDSUMMER_JACKET_M_004.jpg"];

  render(<RootSlider images={images} title={title} sliderPosition={0} sliderPositionMax={0}/>)
  screen.getByTestId('thumb-slider');
  screen.getByTestId('main-slider');
});
