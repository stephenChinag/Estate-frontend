import React from "react";
import { useParams } from "react-router-dom";

export default function SinglePage() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1> {params.id}</h1>
    </div>
  );
}
