import React from 'react';
import {render, screen} from '@testing-library/react';

import CardProductTitle from '../CardProductTitle.jsx';

describe('CardProductTitle user interface', () => {
  it('Displays a heading of the product', () => {
    render(<CardProductTitle title='ABISKO MIDSUMMER JACKET M'/>);
    screen.getByRole('heading');
    screen.getByText('ABISKO MIDSUMMER JACKET M');
  });
});
