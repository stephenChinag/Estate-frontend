import React from "react";

interface Item {
  id: number;
  title: string;
}

interface CardProps {
  item: Item;
}

export default function Card({ item }: CardProps) {
  return (
    <div className="card">
      <h1>HWLLO</h1>
      {item.title}
    </div>
  );
}
