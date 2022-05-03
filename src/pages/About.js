import React from "react";
import "./About.css";
import Header from "../components/Header";
import profileImage from "../images/profileImage.png";
import Footer from "../components/Footer";

function About() {
  return (
    <div id="about__page">
      <Header />

      <div className="about__info">
        <div className="about__info__title">
          <img src={profileImage} alt="profile photo" width="450px" />

          <h3>FOUNDER / DESIGNER</h3>
          <h2>Sally Farrugia</h2>
        </div>

        <div className="about__info__text">
          <h3>About me.</h3>
          <p>
            I've been an interior designer for over 15 years. I specialize in
            Residential, Commercial Design with a strong proficiency in Project
            Management.
            <br />
            <br />
            Creating beautiful designs under a variety of budgets, styles,
            time-frames, and needs is what i do. Guiding clients through every
            phase of the design process to ensure to end result is spot on!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
