import React from "react";
import Header from "../Header/Header";
import Hiro from "../Hiro/Hiro";
import Inventory from "../Inventory/Inventory";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hiro />
      <Inventory />
    </div>
  );
}

export default App;
