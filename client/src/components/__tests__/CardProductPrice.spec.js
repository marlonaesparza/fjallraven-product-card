import React from 'react';
import {render, screen} from '@testing-library/react';

import CardProductPrice from '../CardProductPrice.jsx';

describe('CardProductPrice user interface', () => {
  it('Displays the correct price', () => {
    render(<CardProductPrice price={100}/>);
    screen.getByText('$100');
  });
});
