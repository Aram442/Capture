import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
//Import Imgae
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="Services">
      <div className="description">
        <h2>
          High <span>quality</span>services.
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h2>Efficient</h2>
            </div>
            <p>Lorem ipsum dolar sit amet.</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="clock icon" />
              <h2>Teamwork</h2>
            </div>
            <p>Lorem ipsum dolar sit amet.</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="clock icon" />
              <h2>Diaphragm</h2>
            </div>
            <p>Lorem ipsum dolar sit amet.</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={money} alt="clock icon" />
              <h2>Affordable</h2>
            </div>
            <p>Lorem ipsum dolar sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="Camera" />
      </div>
    </div>
  );
};
export default ServicesSection;
