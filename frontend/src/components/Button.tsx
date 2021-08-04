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

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    &:hover {
      background-color: #362aa3;
    }
  `,
});

type ButtonProps = {
  label: string;
};

function Button({ label }: ButtonProps) {
  return <S.Button>{label}</S.Button>;
}

export default Button;
