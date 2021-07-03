import React from 'react';
import {render, screen} from '@testing-library/react';

import CardCartButton from '../CardCartButton.jsx';

describe('CardCardButton user interface', () => {
  it('Renders a button properly', () => {
    render(<CardCartButton/>);
    screen.getByRole('button');
  });

  it('Has an "add to cart" button', () => {
    render(<CardCartButton/>);
    screen.getByText('add to cart');
  });
});
