import React from 'react';
import styled from 'styled-components/macro';

const Circle = styled.div`
  background-color: #ccc;
  border-radius: 50%;
  height: 4rem;
  text-align: center;
  width: 4rem;
`;

const Initials = styled.span`
  font-size: 2rem;
  line-height: 1;
  position: relative;
  top: 1rem;
`;

export const Avatar = () => (
  <Circle>
    <Initials>#</Initials>
  </Circle>
);
