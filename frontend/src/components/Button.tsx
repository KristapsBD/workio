import React from "react";
import styled from "styled-components";

import { createStyle } from "@/styles";

const S = createStyle({
  Button: styled.button`
    border: none;
    outline: none;
    cursor: pointer;

    padding: 12px 16px;
    border-radius: 2px;

    color: #fff;
    background-color: #2214a7;

    font-size: 16px;
    font-family: "Poppins", sans-serif;

    &:hover {
      background-color: #2e1add;
    }
  `,
});

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

function Button({ label, onClick = () => {} }: ButtonProps) {
  return <S.Button onClick={onClick}>{label}</S.Button>;
}

export default Button;
