import React from 'react';
import {render, screen} from '@testing-library/react';

import CardProductColor from '../CardProductColor.jsx';

describe('CardProductColor user interface', () => {
  it('Displays the current color', () => {
    render(<CardProductColor currentColor='blue'/>);
    screen.getByText('blue');
  });
});
