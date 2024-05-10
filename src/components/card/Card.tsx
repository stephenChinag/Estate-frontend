import { Link } from "react-router-dom";

import location from "../../assets/location.png";
import bath from "../../assets/bath.png";
import bed from "../../assets/bed.png";
import "./card.scss";
interface Item {
  id: number;
  title: string;
  img: string;
  bedroom: number;
  bathroom: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
}

interface CardProps {
  item: Item;
}

export default function Card({ item }: CardProps) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src={location} alt="location" />
          <span> {item.address}</span>
        </p>
        <p className="price">Naira {item.price} </p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src={bed} alt="" />
              <span> {item.bedroom} bedroom </span>
            </div>
            <div className="feature">
              <img src={bath} alt="" />
              <span> {item.bathroom} bathroom </span>
            </div>
          </div>
          <div className="icons"></div>
        </div>
      </div>
    </div>
  );
}
