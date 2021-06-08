import React from 'react';
import styled from 'styled-components';

import { StyledObject } from '@/types';

const S: StyledObject = {};

S.Code = styled.h3``;

S.Message = styled.p``;

interface ErrorPageProps {
  code: number;
  message: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ code, message }) => {
  return (
    <div>
      <S.Code>Error {code}</S.Code>
      <S.Message>{message}</S.Message>
      {/* Insert a cute cat GIF here lol */}
    </div>
  );
};

export default ErrorPage;
