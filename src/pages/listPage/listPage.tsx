import "./listPage.scss";
import React from "react";
import { listdata } from "../../lib/dummyData";
function ListPage() {
  const data = listdata;
  console.log(data);
  return (
    <div>
      <h1> List Page</h1>
    </div>
  );
}

export default ListPage;
