import React from "react";
import "./App.css";
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import News from "./pages/News";

function App() {
  return (
    <div id="app">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
