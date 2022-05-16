import React from "react";
import Header from "../components/Header";
import HomeSlideshow from "../components/HomeSlideshow";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <div id="home__page">
      <Header />
      <div className="HomeSlideShow">
        <HomeSlideshow />
      </div>
      <div className="skills-text">
        <h3>residential design - commercial design - project management</h3>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
