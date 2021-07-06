import styled from 'styled-components/macro';

export const LogsContainer = styled.div`
  &>*: not(: first-child) {
    margin-top: 20px;
  }
`;
