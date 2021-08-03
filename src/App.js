import React, { useState } from "react";
import "./App.css";
import { RanodmColorGenerator } from "./Components/RanodmColorGenerator";
import { Navigation } from "./Components/Navigation";

export function App() {
  const [backgroundColor, setBackgroundColor] = useState("#000");

  const backgroundStyling = {
    "background-color": backgroundColor,
  };

  return (
    <div className="color-picker" style={backgroundStyling}>
      <Navigation />
      <RanodmColorGenerator changeBackground={setBackgroundColor} />
    </div>
  );
}
