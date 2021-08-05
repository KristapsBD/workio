import { useEffect } from "react";
import WebFont from "webfontloader";

export const WebFontConfig = {
  google: {
    families: ["Poppins", "Roboto"],
  },
};

export function loadFonts() {
  useEffect(() => {
    WebFont.load(WebFontConfig);
  }, []);
}
