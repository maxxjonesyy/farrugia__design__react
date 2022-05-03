import React from "react";
import "./News.css";
import Header from "../components/Header";

function News() {
  setTimeout(() => {
    document.querySelector(".eapps-link").style = "display: none";
  }, 1500);

  return (
    <div id="news__page">
      <Header />

      <div class="elfsight-app-5efc666b-dab8-4033-a660-2eda45316d58"></div>
    </div>
  );
}

export default News;
