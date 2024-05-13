import React from "react";
import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";
type PinProps = {
  latitude: number;
  longitude: number;
  img: any;
  title: string;
  id: number;
  price: number;
  bedroom: number;
  bathroom: number;
};

// latitude: 52.4862,
//     longitude

const Pin: React.FC<PinProps> = ({
  latitude,
  longitude,
  img,
  id,
  title,
  price,
  bedroom,
  bathroom,
}) => {
  console.log(latitude, longitude, img, id, title, price, bedroom, bathroom);
  return (
    <Marker position={[latitude, longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={img} alt="" />
          <div className="textContainer">
            <Link to={`/${id}`}> {title}</Link>
            <span className="bed">{bedroom}</span>
            <span className="bed">{bathroom}</span>
            <b> {price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
