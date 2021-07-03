import React from 'react';
import {render, screen} from '@testing-library/react';

import CardSwatches from '../CardSwatches.jsx';

describe('CardSwatches user interface', () => {
  it('Renders right amount of swatches', () => {
    render(<CardSwatches colors={['red', 'blue', 'yellow', 'orange']}/>);
    expect(screen.getAllByTestId('swatch').length).toBe(4);
  });
});
