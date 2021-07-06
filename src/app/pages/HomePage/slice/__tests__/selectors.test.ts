import { RootState } from 'types';

import * as selectors from '../selectors';
import { initialState } from '..';
import { phoneLogsDefaultMock } from '../../__mocks__/phoneLogsDefaultMock';

describe('selectors', () => {
  let state: RootState = {};

  beforeEach(() => {
    state = {};
  });

  it('should select the initial state', () => {
    expect(selectors.selectLoading(state)).toBe(initialState.loading);
  });

  it('should select loading', () => {
    state = {
      listing: { ...initialState, loading: true },
    };
    expect(selectors.selectLoading(state)).toBe(true);
  });

  it('should select phoneLogs', () => {
    const phoneLogs = phoneLogsDefaultMock;
    state = {
      listing: { ...initialState, phoneLogs },
    };
    expect(selectors.selectPhoneLogs(state)).toEqual(phoneLogs);
  });
});
