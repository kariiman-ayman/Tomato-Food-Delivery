import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <div>
        For Better Experience Download <br />
        <div className="tomato-app">
          <img src={assets.tomato} alt="Logo" />
          <span>Tomato App</span>
        </div>
      </div>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Play Store Icon" />
        <img src={assets.app_store} alt="App Store Icon" />
      </div>
    </div>
  );
};

export default AppDownload;
