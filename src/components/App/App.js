import React from "react";
import Header from "../Header/Header";
import Hiro from "../Hiro/Hiro";
import Inventory from "../Inventory/Inventory";
import Contact from "../Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App" id="home">
      <Header />
      <Hiro />
      <Inventory />
      <Contact />
    </div>
  );
}

export default App;
