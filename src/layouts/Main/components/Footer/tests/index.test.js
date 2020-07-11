import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../';

describe('<Footer />', () => {
  it('should render and match the snapshot', () => {
    const tree = render(<Footer />);
    expect(tree).toMatchSnapshot();
  });
});
