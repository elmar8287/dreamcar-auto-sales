import React from "react";
import Hiro from "../Hiro/Hiro";
import Contact from "../Contact/Contact";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Social from "../Social/Social";
import Car from "../Car/Car";
import Reviews from "../Reviews/Reviews";
import "./App.css";

function App() {
  return (
    <div className="App" id="home">
      <Navbar />
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
