import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from 'app/components/Container/Container';
import { GroupedPhoneLogsSection } from 'app/components/GroupedPhoneLogsSection/GroupedPhoneLogsSection';
import { isToday, isYesterday } from 'app/utils/date';

import { usePhoneLogsSlice } from './slice';
import { selectLoading } from './slice/selectors';
import { useLogsGroupedByDate } from './hooks/useLogsGroupedByDate';

export function HomePage() {
  const { actions } = usePhoneLogsSlice();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const phoneLogsGroupedByDate = useLogsGroupedByDate();

  useEffect(() => {
    dispatch(actions.getPhoneLogs());
  }, [dispatch, actions]);

  const getTitle = (dateTitle: string) => {
    if (isToday(new Date(dateTitle))) {
      return 'Today';
    }
    if (isYesterday(new Date(dateTitle))) {
      return 'Yesterday';
    }

    return dateTitle;
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="List phone logs" />
      </Helmet>
      <Container>
        {loading && <p>Loading ...</p>}
        {phoneLogsGroupedByDate ? (
          Object.keys(phoneLogsGroupedByDate)
            .sort()
            .reverse()
            .map(date => (
              <GroupedPhoneLogsSection
                key={`phone-log-section-${date}`}
                title={getTitle(date)}
                phoneLogs={phoneLogsGroupedByDate[date]}
              />
            ))
        ) : (
          <p>No logs ...</p>
        )}
      </Container>
    </>
  );
}
