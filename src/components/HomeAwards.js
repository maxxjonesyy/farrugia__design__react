import React from "react";
import "./HomeAwards.css";
import mag1 from "../images/magazine1.jpg";
import mag2 from "../images/magazine2.jpg";

function HomeAwards() {
  return (
    <div id="homeAwards">
      <div className="awards__info">
        <p>featured projects //</p>
      </div>

      <div className="awards__container">
        <div>
          <img className="awards__left" src={mag1} alt="feature magazine 1" />

          <img className="awards__right" src={mag2} alt="feature magazine 2" />
        </div>
      </div>
    </div>
  );
}

export default HomeAwards;
