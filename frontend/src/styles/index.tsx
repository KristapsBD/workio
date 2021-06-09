import styled, { css } from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export interface ButtonStyleProps {
  large: boolean;
  primary: boolean;
}

export const Button = styled.button<ButtonStyleProps>`
  border: none;
  outline: none;
  cursor: pointer;
  white-space: nowrap;

  color: #fff;
  background: #f27e48;

  border-radius: 4px;

  padding: 10px 20px;
  font-size: 16px;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: #f4976c;
  }

  ${({ large }) =>
    large &&
    css`
      padding: 12px 64px;
      font-size: 20px;
    `}

  ${({ primary }) =>
    primary &&
    css`
      background: #f4976c;

      &:hover {
        background-color: #f27e48;
      }
    `}

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
