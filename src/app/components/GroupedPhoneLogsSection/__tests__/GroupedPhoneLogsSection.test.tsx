import * as React from 'react';
import { render } from '@testing-library/react';

import { GroupedPhoneLogsSection } from '../GroupedPhoneLogsSection';
import { PhoneLog } from 'types/PhoneLogs';

describe('<GroupedPhoneLogsSection  />', () => {
  it('should match snapshot', () => {
    const phoneLogs = [
      {
        phoneNumber: '337899008978',
        date: '2021-04-06T18:20:06+0000',
        id: '7',
        phoneType: 'Mobile',
      },
      {
        phoneNumber: '33566787899',
        date: '2021-05-06T10:20:06+0000',
        id: '8',
        phoneType: 'Mobile',
      },
      {
        phoneNumber: '33566787899',
        date: '2021-04-06T10:20:06+0000',
        id: '9',
        phoneType: 'Mobile',
      },
    ] as PhoneLog[];

    const loadingIndicator = render(
      <GroupedPhoneLogsSection title="foo" phoneLogs={phoneLogs} />,
    );

    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
