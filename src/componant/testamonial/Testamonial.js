import React, { useState } from "react";
import { Imgeslider } from "./Imgeslider";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Testamonial.css";
function Testamonial({ slide }) {
  const [current, setCurrent] = useState(0);
  const length = slide.length;
  if (!Array.isArray(slide) || slide.length <= 0) {
    return null;
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  return (
    <div className="tContiner">
      <h1>Testimonials</h1>
      <div className="slider">
        <FaArrowAltCircleLeft className="leftArrow" onClick={prevSlide} />

        {Imgeslider.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.image} alt="feedback" />}
            </div>
          );
        })}
        <FaArrowAltCircleRight className="rightArrow" onClick={nextSlide} />
      </div>
    </div>
  );
}

export default Testamonial;
