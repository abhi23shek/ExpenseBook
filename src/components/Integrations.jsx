import React from "react";
import "./Integrations.css";
import vector from "../Resources/Vector 2.png";
import hrms from "../Resources/hrms-icon.png";
import finance from "../Resources/finance-icon.png";
import sso from "../Resources/sso-icon.png";

const Integrations = () => {
  return (
    <div className="integrations-container text-center">
      <div className="main-container">
        <h2 className="integrations-heading">
          <span className="integrations-heading-text">Integrations</span>
        </h2>
        <div className="vector">
          <img src={vector}></img>
        </div>

        <div className="row justify-content-center">
          {/* HRMS Systems */}
          <div className="col-md-4 mb-4">
            <div className="integration-card hrms-card p-4">
              <div>
                <img src={hrms} className="icon hrms-icon"></img>
                <span className="integration-title"> HRMS Systems</span>
              </div>
              <p className="integration-text">
                We can integrate with any HRMS as long as the employee master
                can be made available to us over SFTP/API.
              </p>
              <p className="integration-text">
                We are already deeply integrated with PeopleStrong and others
                are coming up.
              </p>
            </div>
          </div>

          {/* Finance Systems */}
          <div className="col-md-4 mb-4">
            <div className="integration-card finance-card p-4">
              <div>
                <img src={finance} className="icon finance-icon"></img>
                <span className="integration-title"> Finance Systems</span>
              </div>
              <p className="integration-text">
                Connect us with your finance systems to get all cost centers
                mapped, and all data reconciled on a periodic/regular basis.
              </p>
              <p className="integration-text">
                Open APIs available to connect.
              </p>
            </div>
          </div>

          {/* Single Sign-on Systems */}
          <div className="col-md-4 mb-4">
            <div className="integration-card sso-card p-4">
              <div>
                <img src={sso} className="icon sso-icon"></img>
                <span className="integration-title">
                  {" "}
                  Single Sign-on Systems
                </span>
              </div>
              <p className="integration-text">
                We can integrate to ensure that your users don’t have to log in
                multiple times into different logins.
              </p>
              <p className="integration-text">
                SSO is possible with any system that offers it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
