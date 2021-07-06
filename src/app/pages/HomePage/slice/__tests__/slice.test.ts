import { slice, initialState, listingActions } from '..';
import { ListingState } from '../types';

import { phoneLogsDefaultMock } from '../../__mocks__/phoneLogsDefaultMock';

describe('slice', () => {
  let state: ListingState;

  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state);
  });

  it('should handle getPhoneLogs', () => {
    expect(slice.reducer(state, listingActions.getPhoneLogs())).toEqual<
      ListingState
    >({
      ...initialState,
      loading: true,
    });
  });

  it('should handle getPhoneLogsSuccess', () => {
    expect(
      slice.reducer(
        state,
        listingActions.getPhoneLogsSuccess(phoneLogsDefaultMock),
      ),
    ).toEqual<ListingState>({
      ...initialState,
      loading: false,
      phoneLogs: phoneLogsDefaultMock,
    });
  });
});
