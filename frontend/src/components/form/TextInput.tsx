import React, { useState } from "react";
import styled, { css } from "styled-components";

import { createStyle } from "@/styles";

import DynamicFiIcon from "../DynamicFiIcon";

const S = createStyle({
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Label: styled.label`
    font-size: 16px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    margin-bottom: 4px;
    color: #f1f1f1;
  `,
  Message: styled.p<{ status?: TextInputStatus }>`
    margin: 0;
    margin-top: 4px;
    padding: 0;
    font-size: 14px;
    color: #3f3f3a;

    ${({ status }) => {
      if (!status) return;

      switch (status.type) {
        case "error":
          return css`
            color: red;
          `;
        case "success":
          return css`
            color: green;
          `;
        case "warning":
          return css`
            color: yellow;
          `;
      }
    }}
  `,
  InputWrapper: styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
  `,
  InputIcon: styled(DynamicFiIcon)<{ status?: TextInputStatus }>`
    position: absolute;
    right: 6px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ status }) =>
      status &&
      css`
        color: ${TextInputStatusConstants[status.type].color};
      `}
  `,
  Input: styled.input<{ status?: TextInputStatus }>`
    outline: none;
    width: 100%;

    padding: 10px 8px;
    border-radius: 2px;
    background-color: transparent;
    border: 1px solid transparent;
    background-color: #38383e;

    font-size: 16px;
    color: #fff;

    &:focus {
      border-color: #efefef;
      box-shadow: 0 0 0 4px #2214a75f;
    }

    ${({ status }) =>
      status &&
      css`
        border-color: ${TextInputStatusConstants[status.type].color};
      `}
  `,
});

function TextInput({ label, type, name }: TextInputProps) {
  const [status, setStatus] = useState<TextInputStatus | undefined>();

  return (
    <S.Container>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input type={type} name={name} status={status} />
        {status && (
          <S.InputIcon
            status={status}
            name={TextInputStatusConstants[status.type].icon}
            size={22}
          />
        )}
      </S.InputWrapper>
      {status && <S.Message status={status}>{status.message}</S.Message>}
    </S.Container>
  );
}

export default TextInput;

export const TextInputStatusConstants = {
  success: {
    color: "green",
    icon: "",
  },
  error: {
    color: "red",
    icon: "FiX",
  },
  warning: {
    color: "yellow",
    icon: "warning",
  },
};

export type TextInputStatus = {
  type: "success" | "error" | "warning";
  message?: string;
};

export type TextInputProps = {
  type: string;
  name: string;
  label?: string;
};
