import React from "react";
import "./carousel.css";
import banner from "../../banner.png";
const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel__info">
        <h1>Understand the financial technology impact now.</h1>
        <p>
          An in-depth understanding of the future of the money, markets and
          transactions, as well as other application areas being impacted by
          fintech.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Carousel;
