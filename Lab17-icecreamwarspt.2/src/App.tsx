import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import AdDesigner from "./components/AdDesigner";
import Votes from "./components/Votes";

import "./App.css";
import { Ad } from "./components/Ad";

function App() {
  return (
    <>
      <Header user={"Chirpus"} />
      <div className="topAds">
        <Ad flavor={"Chocolate"} isLight={false} fontSize={25} />
        <Ad flavor={"Vanilla"} isLight={true} fontSize={25} />
        <Ad flavor={"Strawberry"} isLight={false} fontSize={25} />
      </div>
      <div className="main">
        <AdDesigner />
        <Votes />
      </div>
    </>
  );
}

export default App;
