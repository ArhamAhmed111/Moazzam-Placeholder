import React from 'react';
import './Banner.css';
import Images from "/public/Utills/Images/apilogo.png"; // Make sure this path is correct

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-left">
        <h1>Welcome to MOAZZAM's Placeholder❤</h1>
        <p>
          <a href="/">JSONPlaceholder</a> is an{" "}
          <a href="https://github.com/typicode/jsonplaceholder" target="_blank" rel="noopener noreferrer">
            Open Source Online Mock REST API Service
          </a>
          , designed for developers who need fake JSON data, offering simple and easy-to-understand access.
        </p>
      </div>
      <div className="banner-right">
        <img src={Images} alt="JSONPlaceholder API Logo" />
      </div>
    </div>
  );
}

export default Banner;
