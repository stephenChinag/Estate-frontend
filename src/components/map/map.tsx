import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/pin";

type ItemType = {
  id: number;
  longitude: number;
  latitude: number;

  title: string;
  img: string;
  bedroom: number;
  bathroom: number;
  price: number;

  // Assuming this exists, even though not used in Pin directly.
};

type MapProps = {
  items: ItemType[];
};

const Map: React.FC<MapProps> = ({ items }) => {
  const position: [number, number] = [51.505, -0.09];
  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin
          key={item.id}
          id={item.id}
          img={item.img}
          latitude={item.latitude}
          longitude={item.longitude}
          title={item.title}
          bedroom={item.bedroom}
          bathroom={item.bathroom}
          price={item.price}
        />
      ))}
    </MapContainer>
  );
};
export default Map;
