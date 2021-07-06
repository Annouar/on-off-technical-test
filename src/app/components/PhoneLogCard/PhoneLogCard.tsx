import React, { FC } from 'react';

import { PhoneLog } from 'types/PhoneLogs';
import { getTwoDigitsTime } from 'app/utils/date';

import {
  Card,
  CallInformationContainer,
  CallNumber,
  PhoneType,
  Time,
} from './styled';
import { Avatar } from '../Avatar/Avatar';

interface Props {
  phoneNumber: PhoneLog['phoneNumber'];
  phoneType: PhoneLog['phoneType'];
  date: PhoneLog['date'];
}

export const PhoneLogCard: FC<Props> = ({ phoneNumber, phoneType, date }) => {
  const phoneLogDate = new Date(date);

  const hours = getTwoDigitsTime(phoneLogDate.getUTCHours());
  const minutes = getTwoDigitsTime(phoneLogDate.getUTCMinutes());

  return (
    <Card>
      <Avatar />
      <CallInformationContainer>
        <CallNumber>+{phoneNumber}</CallNumber>
        <PhoneType>{phoneType}</PhoneType>
      </CallInformationContainer>
      <Time>
        {hours}:{minutes}
      </Time>
    </Card>
  );
};
