import React from 'react';
import {render, screen} from '@testing-library/react';

import CardProductType from '../CardProductType.jsx';

describe('CardProductType user interface', () => {
  it('Displays the right type for the product', () => {
    render(<CardProductType type='ATHLETIC'/>);
    screen.getByText('ATHLETIC');
  });
});
