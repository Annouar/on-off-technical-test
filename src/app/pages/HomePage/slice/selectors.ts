import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.listing || initialState;

export const selectLoading = createSelector(
  [selectSlice],
  state => state.loading,
);

export const selectPhoneLogs = createSelector(
  [selectSlice],
  state => state.phoneLogs,
);
