import React from 'react';
import {render, screen} from '@testing-library/react';

import MainSlider from '../MainSlider.jsx';

test('Rendered right amount of main images', () => {
  const title = 'ABISKO MIDSUMMER JACKET M';
  const images = ["https://fjallraven-card-images.s3-us-west-2.amazonaws.com/ABISKO_MIDSUMMER_JACKET_M/ABISKO_MIDSUMMER_JACKET_M_001.jpg", "https://fjallraven-card-images.s3-us-west-2.amazonaws.com/ABISKO_MIDSUMMER_JACKET_M/ABISKO_MIDSUMMER_JACKET_M_002.jpg"];

  render(<MainSlider title={title} images={images}/>);
  expect(screen.getAllByAltText(title).length).toBe(2);
});

