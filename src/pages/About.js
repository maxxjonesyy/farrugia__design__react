import React from "react";
import "./About.css";
import Header from "../components/Header";
import profileImage from "../images/profileImage.jpg";
import Footer from "../components/Footer";
import mag1 from "../images/magazine1.jpg";
import mag2 from "../images/magazine2.jpg";
import award from "../images/mbanswlogo2.png";

function About() {
  return (
    <div id="about__page">
      <Header />

      <div className="about__info">
        <div className="about__info__title">
          <img src={profileImage} alt="profile photo" width="300px" />

          <h3>FOUNDER / DESIGNER</h3>
          <h2>Sally Farrugia</h2>
        </div>

        <div className="page-right">
          <div className="about__info__text">
            <h3>About me.</h3>
            <p>
              I've been an interior designer for over 15 years. I specialize in
              Residential, Commercial Design with a strong proficiency in
              Project Management.
              <br />
              <br />
              Creating beautiful designs under a variety of budgets, styles,
              time-frames, and needs is what i do. Guiding clients through every
              phase of the design process to ensure to end result is spot on!
            </p>
          </div>
          <div className="awards__container">
            <h3>FEATURED WORK // AWARDS</h3>
            <div>
              <img
                className="awards__left"
                src={mag1}
                alt="feature magazine 1"
                width="200px"
              />

              <img
                className="awards__middle"
                src={mag2}
                alt="feature magazine 2"
                width="200px"
              />

              <img
                className="awards__right"
                src={award}
                alt="feature award"
                width="200px"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
