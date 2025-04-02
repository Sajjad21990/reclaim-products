import React from "react";
import ScrollingBanner from "./ScrollingBanner";
import "./Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const textBannerItems = [
    {
      type: "text" as const,
      text: "Welcome to our website!",
    },
    {
      type: "logo" as const,
      logoSrc: "https://cdn-icons-png.flaticon.com/512/11378/11378785.png",
      logoAlt: "GitHub",
      link: "https://github.com",
    },
    {
      type: "combined" as const,
      logoSrc: "https://cdn-icons-png.flaticon.com/512/11378/11378785.png",
      logoAlt: "Amazon",
      text: "airdrop based on purchases made on",
      link: "https://amazon.com",
    },
  ];

  return (
    <div className="banner-container">
      <ScrollingBanner items={textBannerItems} speed={40} backgroundColor="#333333" textColor="#ffffff" height={40} />
      <div className="banner-inner-container">
        <div className="banner-video-container">
          <video src="/bg-video.mp4" autoPlay muted loop />
        </div>
        <div className="banner-text-overlay">
          <h1>breaking the walled gardens</h1>
          <p>he internet’s walls won’t break themselves, join the revolution, one step at a time</p>
          <div className="button-container">
            <Link to="/products">
              <button>fight</button>
            </Link>
            <Link to="/products">
              <button>armour</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
