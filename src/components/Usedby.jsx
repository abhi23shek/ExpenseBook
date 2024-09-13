import React from "react";
import "./Usedby.css"; // Import the CSS file
import hotjarlogo from "../Resources/hotjarlogo.png";

const UsedBy = () => {
  return (
    <div className="usedby-container">
      <div className="enterprise">
        <p className="usedby-text">USED BY OVER 50 ENTERPRISES</p>
      </div>
      <div className="row justify-content-center logos">
        <div className="col-2">
          <img src={hotjarlogo} alt="Hotjar Logo" className="usedby-logo" />
        </div>
        <div className="col-2">
          <img src={hotjarlogo} alt="Hotjar Logo" className="usedby-logo" />
        </div>
        <div className="col-2">
          <img src={hotjarlogo} alt="Hotjar Logo" className="usedby-logo" />
        </div>
        <div className="col-2">
          <img src={hotjarlogo} alt="Hotjar Logo" className="usedby-logo" />
        </div>
        <div className="col-2">
          <img src={hotjarlogo} alt="Hotjar Logo" className="usedby-logo" />
        </div>
        <div className="col-2">
          <img src={hotjarlogo} alt="Hotjar Logo" className="usedby-logo" />
        </div>
      </div>
    </div>
  );
};

export default UsedBy;
