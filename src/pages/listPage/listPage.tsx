import './listPage.scss';

// import { listdata } from '../../lib/dummyData';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import { useLoaderData } from 'react-router-dom';
import Map from '../../components/map/map';

function ListPage() {
  // console.log(data);
  const data = useLoaderData();

  console.log(data);
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />

          {data?.map((item: any) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
