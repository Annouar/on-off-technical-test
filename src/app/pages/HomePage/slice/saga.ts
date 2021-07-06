import { call, put, takeLatest } from 'redux-saga/effects';
import { listingActions } from '.';
import { getPhoneLogsData } from '../services/api/phoneLogs';

function* getPhoneLogsListing() {
  const phoneLogs = yield call(getPhoneLogsData);

  yield put(listingActions.getPhoneLogsSuccess(phoneLogs));
}

export function* Saga() {
  yield takeLatest(listingActions.getPhoneLogs.type, getPhoneLogsListing);
}
