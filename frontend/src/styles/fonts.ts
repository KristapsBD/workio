import { useEffect } from "react";
import WebFont from "webfontloader";

export const WebFontConfig = {
  google: {
    families: ["Poppins"],
  },
};

export function loadFonts() {
  useEffect(() => {
    WebFont.load(WebFontConfig);
  }, []);
}
