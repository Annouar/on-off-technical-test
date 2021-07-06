import * as React from 'react';
import { render } from '@testing-library/react';

import { Container } from '../Container';

describe('<Container  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Container />);

    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
