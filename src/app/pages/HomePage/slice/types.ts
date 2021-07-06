import { PhoneLog } from 'types/PhoneLogs';

export interface ListingState {
  loading: boolean;
  phoneLogs?: PhoneLog[];
}
