import { phoneLogsDefaultMock } from '../../__mocks__/phoneLogsDefaultMock';

export const getPhoneLogsData = () =>
  new Promise(res => setTimeout(res(phoneLogsDefaultMock), 500));
