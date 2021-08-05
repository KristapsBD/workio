import { css } from "styled-components";

export const MOBILE_BREAKPOINT = 768;
export const TABLET_BREAKPOINT = 1024;

export const mobile = (s: any, p: number = 0) => css`
  @media only screen and (max-width: ${MOBILE_BREAKPOINT - p}px) {
    ${s}
  }
`;

export const tablet = (s: any, p: number = 0) => css`
  @media only screen and (max-width: ${TABLET_BREAKPOINT - p}px) {
    ${s}
  }
`;
