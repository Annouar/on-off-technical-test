import styled from 'styled-components/macro';

export const Card = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
  border: 1px solid;
  border-radius: 20px;

  :hover {
    border: 2px solid green;
  }
`;

export const CallInformationContainer = styled.div`
  flex-basis: 60%;
  display: flex;
  flex-flow: column nowrap;
`;

export const CallNumber = styled.span``;

export const PhoneType = styled.span`
  color: #a9aaac;
`;

export const Time = styled.span`
  color: #a7a9aa;
`;
