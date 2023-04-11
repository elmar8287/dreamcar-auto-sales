import React from "react";
import Header from "../Header/Header";
import Hiro from "../Hiro/Hiro";
import About from "../About/About";
import Inventory from "../Inventory/Inventory";
import Contact from "../Contact/Contact";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Social from "../Social/Social";
import Car from '../Car/Car'
import Reviews from "../Reviews/Reviews";
import "./App.css";

function App() {
  return (
    <div className="App" id="home">
      <Navbar />
      {/* <Header /> */}
      <Hiro />
      <Social />
      <Car />
      <Reviews />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
