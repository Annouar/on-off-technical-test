import React, { FC } from 'react';
import { PhoneLog } from 'types/PhoneLogs';

import { PhoneLogCard } from 'app/components/PhoneLogCard/PhoneLogCard';

import { LogsContainer } from './styled';

interface Props {
  title: string;
  phoneLogs: PhoneLog[];
}

export const GroupedPhoneLogsSection: FC<Props> = ({ title, phoneLogs }) => {
  // TODO: profile this to know if useCallback is usefull here
  const sortedLogs = phoneLogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <p>{title}</p>
      <LogsContainer>
        {sortedLogs.map(log => (
          <PhoneLogCard
            key={log.id}
            phoneNumber={log.phoneNumber}
            phoneType={log.phoneType}
            date={log.date}
          />
        ))}
      </LogsContainer>
    </>
  );
};
