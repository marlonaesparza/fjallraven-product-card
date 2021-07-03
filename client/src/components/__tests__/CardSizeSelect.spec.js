import React from 'react';
import {render, screen} from '@testing-library/react';

import CardSizeSelect from '../CardSizeSelect.jsx';

describe('CardSizeSelect user interface', () => {
  it('Displays a Size Guide link for looks', () => {
    render(<CardSizeSelect/>);
    screen.getByText('Size Guide');
  });

  it('Has a select element drop down menu', () => {
    render(<CardSizeSelect/>);
    screen.getByTestId('size-select');
    screen.getByText('Select a size');
  });

  it ('Contains all necessary size options', () => {
    render(<CardSizeSelect/>);
    screen.getByText('XS');
    screen.getByText('S');
    screen.getByText('M');
    screen.getByText('L');
    screen.getByText('XL');
  });
});
