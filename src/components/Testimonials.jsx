import React from "react";
import "./Testimonials.css";
import img1 from "../Resources/img1.png";
import img2 from "../Resources/img2.png";
import img3 from "../Resources/img3.png";

const Testimonials = () => {
  return (
    <div className="testimonial-container text-center">
      <div className="testimonial-main-container">
        <h2 className="testimonial-heading">
          <span className="testimonial-heading-text">
            Our customers love us
          </span>
        </h2>

        <div className="row">
          {/* Testimonia 1 */}
          <div className="col-md-4">
            <div className="testimonial-card-1 1st-card p-4">
              <p className="testimonial-text">
                ExpenseBook has truly streamlined our travel setup. No more
                emails and delays in booking. No mor unknown overruns in
                expense. Everything is trackable, and the configurability they
                offer is outstanding.
              </p>
              <div className="row testi-info">
                <div className="col testi-image">
                  <img src={img1} className="rounded-circle img1"></img>
                </div>
                <div className="col testi-details">
                  <div className="col testi-details-1">Rohit Mehra</div>
                  <div className="col testi-details-2">CFO, XYZ</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonia 2 */}
          <div className="col-md-4">
            <div className="testimonial-card-2 1st-card p-4">
              <p className="testimonial-text">
                ExpenseBook has truly streamlined our travel setup. No more
                emails and delays in booking. No mor unknown overruns in
                expense. Everything is trackable, and the configurability they
                offer is outstanding.
              </p>
              <div className="row testi-info">
                <div className="col testi-image">
                  <img src={img2} className="rounded-circle img1"></img>
                </div>
                <div className="col testi-details">
                  <div className="col testi-details-1">Alan Turing</div>
                  <div className="col testi-details-2">CFO, XYZ</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonia 3 */}
          <div className="col-md-4">
            <div className="testimonial-card-3 1st-card p-4">
              <p className="testimonial-text">
                ExpenseBook has truly streamlined our travel setup. No more
                emails and delays in booking. No mor unknown overruns in
                expense. Everything is trackable, and the configurability they
                offer is outstanding.
              </p>
              <div className="row testi-info">
                <div className="col testi-image">
                  <img src={img3} className="rounded-circle img1"></img>
                </div>
                <div className="col testi-details">
                  <div className="col testi-details-1">Mark Jacob</div>
                  <div className="col testi-details-2">CFO, XYZ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
