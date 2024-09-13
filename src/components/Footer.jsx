import React from "react";
import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import logo from "../Resources/logo.png";

const Footer = () => {
  return (
    <div class="container footer">
      <div class="row first-row-container">
        <div class="col">
          <div className="navbar__logo">
            <img src={logo} alt="ExpenseBook Logo" />
            <span className="logo-text1">Expense</span>
            <span className="logo-text2">Book</span>
          </div>
        </div>

        <div class="col contact-container">
          <div className="adress-phone-container">
            <div className="adress-container">
              <span className="icon-bottom">
                <FaLocationDot />
              </span>
              <span className="bottom-container-text"> Address</span>
            </div>
            <div className="phone-container">
              <span className="icon-bottom">
                <IoMdCall />
              </span>
              <span className="bottom-container-text"> +91 1234567890</span>
            </div>
          </div>
          <div className="social-container">
            <span className="social-text-bottom">Social Media</span>
            <span className="icon-bottom2">
              <FaLinkedinIn />
            </span>
            <span className="icon-bottom2">
              <FaYoutube />
            </span>
            <span className="icon-bottom2">
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
      <div className="create-gap">
        <hr />
      </div>
      <div className="row second-row-container">
        <div className="col">
          <div className="footer-links">
            <span className="footer-link-text">Blogs</span>
            <span className="footer-link-text">Features</span>
            <span className="footer-link-text">Pricing</span>
            <span className="footer-link-text">Integrations</span>
          </div>
        </div>
        <div className="col">
          <div className="copyright-text">Copyright © 2024 • ExpenseBook</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
