import React from "react";
import Header from "../components/Header";
import HomeAwards from "../components/HomeAwards";
import HomeSlideshow from "../components/HomeSlideshow";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <div id="home__page">
      <Header />
      <HomeAwards />
      <HomeSlideshow />
      <Footer />
    </div>
  );
}

export default Home;
