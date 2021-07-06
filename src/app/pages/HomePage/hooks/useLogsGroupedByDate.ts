import { useSelector } from 'react-redux';
import { GroupedLogs } from 'types/PhoneLogs';

import { selectPhoneLogs } from '../slice/selectors';

export const useLogsGroupedByDate = (): GroupedLogs | undefined => {
  const phoneLogs = useSelector(selectPhoneLogs);

  return phoneLogs?.reduce<GroupedLogs>((groups, call) => {
    const [date] = call.date.split('T');
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(call);

    return groups;
  }, {});
};
