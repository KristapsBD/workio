import React from "react";

import { loadFonts } from "@/styles";
import Button from "./components/Button";

function App() {
  loadFonts();

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Button label="Hello!" />
    </div>
  );
}

export default App;
