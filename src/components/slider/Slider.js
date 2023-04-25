import React, { useState, useEffect } from "react";
import "./Slider.css";
import data from "../../data/games.json";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const games = data.games;
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === games.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [games.length]);

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === games.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? games.length - 1 : prevIndex - 1
    );
  };

  const renderSlides = () => {
    const activeSlide = games[activeIndex];

    return (
      <>
        <div
          className="slide active"
          style={{  backgroundImage: `url(${activeSlide.image})` }}
        >
          <h2>{activeSlide.title}</h2>
        </div>

      </>
    );
  };

  return (
    <div 
    className="slider"
    >
      <div 
        className="slides-container"
        onClick={() => navigate(`/game/${games[activeIndex].id}`)}
      >
        {renderSlides()}
      </div>
      <div className="buttons">
        <button className="prev-btn" onClick={handlePrevSlide}>
          Prev
        </button>
        <button className="next-btn" onClick={handleNextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
