import React from "react";
import "./Portfolio.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import av1 from "../images/BIMBIMBI/av1.jpg";
import av2 from "../images/BIMBIMBI/av2.jpg";
import av3 from "../images/BIMBIMBI/av3.jpg";
import av4 from "../images/BIMBIMBI/av4.jpg";
import av5 from "../images/BIMBIMBI/av5.jpg";
import av6 from "../images/BIMBIMBI/av6.jpg";
import av7 from "../images/BIMBIMBI/av7.jpg";
import av8 from "../images/BIMBIMBI/av8.jpg";

import pb1 from "../images/PALM BEACH HOUSE/pb1.jpg";
import pb2 from "../images/PALM BEACH HOUSE/pb2.jpg";
import pb3 from "../images/PALM BEACH HOUSE/pb3.jpg";
import pb4 from "../images/PALM BEACH HOUSE/pb4.jpg";
import pb5 from "../images/PALM BEACH HOUSE/pb5.jpg";
import pb6 from "../images/PALM BEACH HOUSE/pb6.jpg";
import pb7 from "../images/PALM BEACH HOUSE/pb7.jpg";
import pb8 from "../images/PALM BEACH HOUSE/pb8.jpg";

function Portfolio() {
  function changeDisplayImage(e) {
    if (e.target.classList.contains("av")) {
      const mainImageAv = document.querySelector(".main__imageAv");
      mainImageAv.src = e.target.src;
    } else if (e.target.classList.contains("pb")) {
      const mainImagePb = document.querySelector(".main__imagePb");
      mainImagePb.src = e.target.src;
    }
  }

  return (
    <div id="portfolio__page">
      <Header />

      <div className="project__container">
        <div className="project__center" onClick={changeDisplayImage}>
          <img className="main__imageAv" src={av3} alt="" />

          <div className="project__bottom">
            <img className="bottom__image av" src={av3} alt="" />
            <img className="bottom__image av" src={av1} alt="" />
            <img className="bottom__image av" src={av2} alt="" />
            <img className="bottom__image av" src={av4} alt="" />
            <img className="bottom__image av" src={av5} alt="" />
            <img className="bottom__image av" src={av6} alt="" />
            <img className="bottom__image av" src={av7} alt="" />
            <img className="bottom__image av" src={av8} alt="" />
          </div>
        </div>

        <div className="project__info">
          <h1>bimbimbi, avalon</h1>
        </div>
      </div>

      <div className="project__container">
        <div className="project__center" onClick={changeDisplayImage}>
          <img className="main__imagePb" src={pb7} alt="" />

          <div className="project__bottom">
            <img className="bottom__image pb" src={pb7} alt="" />
            <img className="bottom__image pb" src={pb1} alt="" />
            <img className="bottom__image pb" src={pb2} alt="" />
            <img className="bottom__image pb" src={pb3} alt="" />
            <img className="bottom__image pb" src={pb4} alt="" />
            <img className="bottom__image pb" src={pb5} alt="" />
            <img className="bottom__image pb" src={pb6} alt="" />
            <img className="bottom__image pb" src={pb8} alt="" />
          </div>
        </div>

        <div className="project__info">
          <h1>iluka, palm beach</h1>
        </div>
      </div>

      <h2 className="bottom__alert">More to be uploaded soon...</h2>

      <Footer />
    </div>
  );
}

export default Portfolio;
