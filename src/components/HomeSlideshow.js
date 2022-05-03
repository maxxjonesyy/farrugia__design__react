import React, { Component } from "react";
import "./HomeSlideshow.css";
import image1 from "../images/HOMESLIDESHOW/pb2.jpg";
import image2 from "../images/HOMESLIDESHOW/pb3.jpg";
import image3 from "../images/HOMESLIDESHOW/pb6.jpg";
import image4 from "../images/HOMESLIDESHOW/av3.jpg";
import image5 from "../images/HOMESLIDESHOW/av1.jpg";
import image6 from "../images/HOMESLIDESHOW/av4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div id="slideShow">
        <Slider {...settings}>
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
          <div>
            <img src={image4} alt="" />
          </div>
          <div>
            <img src={image5} alt="" />
          </div>
          <div>
            <img src={image6} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
