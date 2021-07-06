import { renderHook } from '@testing-library/react-hooks';
import { useSelector } from 'react-redux';

import { useLogsGroupedByDate } from '../useLogsGroupedByDate';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('useLogsGroupedByDate', () => {
  it('should return logs grouped by date', () => {
    const phoneLogsMock = [
      {
        phoneNumber: '33467678989',
        date: '2021-07-06T11:20:06+0000',
        id: '2',
        phoneType: 'Home',
      },
      {
        phoneNumber: '33782075276',
        date: '2021-07-06T20:20:06+0000',
        id: '3',
        phoneType: 'Work',
      },
      {
        phoneNumber: '335566778899',
        date: '2021-04-03T22:50:06+0000',
        id: '4',
        phoneType: 'Mobile',
      },
      {
        phoneNumber: '33278789090',
        date: '2021-07-06T00:20:06+0000',
        id: '1',
        phoneType: 'Mobile',
      },
    ];
    (useSelector as jest.Mock).mockImplementationOnce(() => phoneLogsMock);

    const { result } = renderHook(() => useLogsGroupedByDate());

    expect(result.current).toEqual({
      '2021-07-06': [
        {
          phoneNumber: '33467678989',
          date: '2021-07-06T11:20:06+0000',
          id: '2',
          phoneType: 'Home',
        },
        {
          phoneNumber: '33782075276',
          date: '2021-07-06T20:20:06+0000',
          id: '3',
          phoneType: 'Work',
        },
        {
          phoneNumber: '33278789090',
          date: '2021-07-06T00:20:06+0000',
          id: '1',
          phoneType: 'Mobile',
        },
      ],
      '2021-04-03': [
        {
          phoneNumber: '335566778899',
          date: '2021-04-03T22:50:06+0000',
          id: '4',
          phoneType: 'Mobile',
        },
      ],
    });
  });
});
