import React from "react";
import Header from "../Header/Header";
import Hiro from "../Hiro/Hiro";
import About from "../About/About";
import Inventory from "../Inventory/Inventory";
import Contact from "../Contact/Contact";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App" id="home">
      <Header />
      <Hiro />
      <About />
      <Inventory />
      <Contact />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
