import * as React from 'react';
import { render } from '@testing-library/react';

import { PhoneLogCard } from '../PhoneLogCard';

describe('<CallCard  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <PhoneLogCard
        phoneNumber="33629210017"
        phoneType="Mobile"
        date="2021-04-06T10:20:06+0000"
      />,
    );

    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
