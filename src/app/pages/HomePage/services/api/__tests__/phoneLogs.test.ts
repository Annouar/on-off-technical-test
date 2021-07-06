import { phoneLogsDefaultMock } from 'app/pages/HomePage/__mocks__/phoneLogsDefaultMock';

import { getPhoneLogsData } from '../phoneLogs';

describe('phoneLogs', () => {
  describe('getPhoneLogsData', () => {
    it('should return phoneLogsDefaultMock', async () => {
      const result = await getPhoneLogsData();

      expect(result).toEqual(phoneLogsDefaultMock);
    });
  });
});
