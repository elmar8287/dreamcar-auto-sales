import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-rights">
          <h4>Dreamcar Auto Sales</h4>
          <ul className="footer-address">
            <li>Address: WA, Seattle, ...</li>
            <li>Phone: (111) 1111-111-111</li>
            <li>E-mail: 111@111.com</li>
          </ul>
          <ul className="footer-icons">
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaTwitter /></li>
            <li><FaWhatsapp /></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Links</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
            <a href="#about">About</a>
            </li>
            <li>
            <a href="#cars">Cars</a>
            </li>
            <li>
            <a href="#contact">Contact</a>
            </li>
          </ul>
          <h5 className="footer-copy-rights">&copy; 2022 Copyright: Dreamcarautosale</h5>
          <a href="https://github.com/elmar8287" target="__blank" className="elmar-link">by Elmar Abdulkarimov</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
