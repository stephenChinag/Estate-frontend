import { listdata } from "../../lib/dummyData";
import Card from "../card/Card";

export default function List() {
  return (
    <div className="list">
      {listdata.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
