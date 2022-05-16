import React from "react";
import "./News.css";
import Header from "../components/Header";

function News() {
  return (
    <div id="news__page">
      <Header />

      <div className="ig__feed__container">
        <iframe
          className="ig__feed"
          src="https://embedsocial.com/facebook_album/pro_hashtag/04c7e2e22bdb90ba683fe00598f477caa25ca07f"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  );
}

export default News;
