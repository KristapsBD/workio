import React from "react";
import styled, { css } from "styled-components";

import { createStyle } from "@/styles";

const S = createStyle({
  Button: styled.button<{ secondary?: boolean }>`
    border: none;
    outline: none;
    cursor: pointer;

    padding: 10px 16px;
    border-radius: 2px;

    color: #fff;
    background-color: #2214a7;

    font-size: 14px;
    font-family: "Poppins", sans-serif;
    border: 2px solid transparent;

    &:hover {
      background-color: #2e1add;
    }

    ${({ secondary }) =>
      secondary &&
      css`
        background-color: transparent;
        border-color: #2214a7;

        &:hover {
          background-color: #2e1add4f;
        }
      `}
  `,
});

type ButtonProps = {
  label: string;
  secondary?: boolean;
  onClick?: () => void;
};

function Button({ label, secondary = false, onClick = () => {} }: ButtonProps) {
  return (
    <S.Button secondary={secondary} onClick={onClick}>
      {label}
    </S.Button>
  );
}

export default Button;
