import { StyledComponent } from "styled-components";

import GlobalStyle from "./globalStyle";
import { WebFontConfig, loadFonts } from "./fonts";

// Util function to pass types to a styled object
export function createStyle(styles: {
  [k: string]: StyledComponent<any, any>;
}) {
  return styles;
}

export { GlobalStyle, WebFontConfig, loadFonts };
