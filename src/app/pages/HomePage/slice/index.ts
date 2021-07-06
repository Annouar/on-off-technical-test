import { PayloadAction } from '@reduxjs/toolkit';
import { PhoneLog } from 'types/PhoneLogs';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { Saga } from './saga';
import { ListingState } from './types';

export const initialState: ListingState = {
  loading: false,
};

export const slice = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    getPhoneLogs(state) {
      state.loading = true;
    },
    getPhoneLogsSuccess(state, action: PayloadAction<PhoneLog[]>) {
      state.loading = false;
      state.phoneLogs = action.payload;
    },
  },
});

export const { actions: listingActions } = slice;

export const usePhoneLogsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: Saga });
  return { actions: slice.actions };
};
