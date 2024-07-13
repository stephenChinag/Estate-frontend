import "./listPage.scss";

import { listdata } from "../../lib/dummyData";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/map";
import { useLoaderData } from "react-router-dom";

function ListPage() {
  // console.log(data);
  const posts = useLoaderData();
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />

          {posts?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      {/* <div className="mapContainer">
        <Map items={posts} />
      </div> */}
    </div>
  );
}

export default ListPage;
