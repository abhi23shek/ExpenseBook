import React from "react";
import "./Manage.css";
const Manage = () => {
  return (
    <div className="manage-container text-center">
      <div className="manage-main-container">
        <h2 className="manage-heading">
          <span className="manage-heading-text">
            Manage your travel and expenses the smart way!
          </span>
        </h2>

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
    </div>
  );
};

export default Manage;
