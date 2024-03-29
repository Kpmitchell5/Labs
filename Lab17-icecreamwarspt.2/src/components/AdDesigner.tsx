import { useState } from "react";
import "../css/AdDesigner.css";
import { Ad } from "./Ad";

export default function AdDesigner() {
  const [flavor, setFlavor] = useState<string>("Chocolate");
  const [isLight, setIsLight] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<number>(20);

  return (
    <div id="AdDesigner">
      <h2>AdDesigner</h2>

      {/* <Ad flavor={flavor} isLight={isLight} fontSize={fontSize} /> */}

      <h3>What to support:</h3>
      <div className="button-bar">
        <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
        <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
        <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
      </div>

      <h3>Color Theme</h3>
      <div className="button-bar">
        <button onClick={() => setIsLight(true)}>Light</button>
        <button onClick={() => setIsLight(false)}>Dark</button>
      </div>

      <h3>Font Size</h3>
      <div className="button-bar">
        <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
        <input type="number" value={fontSize}></input>
        <button onClick={() => setFontSize(fontSize - 1)}>Down</button>
      </div>
    </div>
  );
}
