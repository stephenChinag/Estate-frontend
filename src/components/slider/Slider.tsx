import React, { useState } from "react";
import "./slider.scss";
import arrow from "../../assets/arrow.png";
type SliderProps = {
  images: string[];
};

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  // const changeSlider = (direction: any) => {
  //   if (direction === "left") {
  //     if (imageIndex === 0) {
  //     } else {
  //     }
  //   } else {
  //     if (imageIndex === images.length - 1) {
  //     } else {
  //     }
  //   }
  // };
  const changeSlider = (direction: string) => {
    if (direction === "left") {
      setImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : (prevIndex || 0) - 1
      );
    } else {
      setImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : (prevIndex || 0) + 1
      );
    }
  };
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div
            className="arrow"
            onClick={() => {
              changeSlider("left");
            }}
          >
            <img src={arrow} alt="arr" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} />
          </div>
          <div
            className="arrow"
            onClick={() => {
              changeSlider("right");
            }}
          >
            <img src={arrow} className="right" alt="arr" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((img, index) => (
          <img
            src={img}
            alt=""
            key={index + 1}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};
export default Slider;
