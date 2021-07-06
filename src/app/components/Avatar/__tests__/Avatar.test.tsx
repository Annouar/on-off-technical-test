import React from 'react';
import { render } from '@testing-library/react';

import { Avatar } from '../Avatar';

describe('<Avatar  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Avatar />);

    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
