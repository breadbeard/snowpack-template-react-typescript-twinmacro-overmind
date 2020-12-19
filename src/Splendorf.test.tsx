import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import Splendorf from './Splendorf';

describe('<Splendorf>', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<Splendorf />);
    const linkElement = getByText(/learn react/i);
    expect(document.body.contains(linkElement));
  });
});
