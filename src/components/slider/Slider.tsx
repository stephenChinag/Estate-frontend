import React, { useState } from "react";
import "./slider.scss";
import arrow from "../../assets/arrow.png";
type SliderProps = {
  images: string[];
};

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  // const prevImage = () => {
  //   setImageIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Fix: Ensure index doesn't go below 0
  // };

  // const nextImage = () => {
  //   setImageIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1)); // Fix: Ensure index doesn't exceed image array length
  // };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img src={arrow} alt="arr" />
          </div>
          <div className="imgContainer">
            <img src={images[0]} />
          </div>
          <div className="arrow">
            <img src={arrow} className="right" alt="arr" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            {" "}
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
            key={index}
            onClick={() => setImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default Slider;
