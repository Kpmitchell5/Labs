import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import AdDesigner from "./components/AdDesigner";
import Votes from "./components/Votes";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <AdDesigner />
        <Votes />
      </div>
    </>
  );
}

export default App;
