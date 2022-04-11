import React from "react";
import Header from "../Header/Header";
import Hiro from "../Hiro/Hiro";
import About from "../About/About";
import Inventory from "../Inventory/Inventory";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App" id="home">
      <Header />
      <Hiro />
      <About />
      <Inventory 
        name="Winnebago view sprinter"
        price="49.995$" year="2008"
        condition="Like new"
        cylinders="6 cylinders"
        transmission="Atomatic"
        fuel="Diesel" odometer="109000"
        link="https://seattle.craigslist.org/see/rvd/d/kirkland-2008-winnebago-view-sprinter/7462993491.html"
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
