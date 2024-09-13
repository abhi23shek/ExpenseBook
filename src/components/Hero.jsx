import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container text-center">
      <div>
        <span className="world-most">The World's Most Configurable</span>
      </div>

      <div className="prim">
        <span className="pri_heading">
          Travel & Expense Management Software
        </span>
      </div>

      <div className="div-muted">
        <span className="text-muted">
          Configure <a href="#!">any</a> rule. Enable a world-class mobile
          experience for your users. Get seamless reporting & integrations.
          Inbuilt OCR expense scanning. Manage travel & non-travel expenses.
          Open APIs to connect with external systems.
        </span>
      </div>

      <div className="d-flex form-container">
        <input
          type="text"
          className="form-control1 me-2"
          placeholder=" Name"
          aria-label=" Name"
        />
        <input
          type="email"
          className="form-control2 me-2"
          placeholder=" Official email ID"
          aria-label=" Email"
        />
        <button type="button" className="btn-start">
          <span className="start-trial-text">Start trial</span>
        </button>
      </div>
      <p className="text-muted trial-info mt-3">
        <span className="enote1">30 Days free trial</span>
        <span className="ellipse5">&#9679;</span>
        <span className="enote2">Upto 10 users</span>
      </p>
    </div>
  );
};

export default Hero;
