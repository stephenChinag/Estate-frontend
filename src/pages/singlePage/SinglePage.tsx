import React from "react";
import { useParams } from "react-router-dom";
import ListPage from "../listPage/listPage";

export default function SinglePage() {
  const params = useParams();
  console.log(params);
  return <div></div>;
}
