import { Link } from "react-router-dom";

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
      <Link to="">Card</Link>
    </div>
  );
}
