import { useParams } from "react-router-dom";
import { singlePostData } from "../../lib/dummyData";
import { userData } from "../../lib/dummyData";
import location from "../../assets/location.png";
import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
export default function SinglePage() {
  const params = useParams();
  console.log(params);

  const { title, address, price, description } = singlePostData;
  const { img, name } = userData;
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          first
          <Slider />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1> {title}</h1>
                <div className="address">
                  <img src={location} alt="" />
                  <span>{address}</span>
                </div>
                <div className="price"> ${price}</div>
              </div>
              <div className="user">
                <img src={img} alt="user" />
                <span>{name}</span>
              </div>
            </div>
            <div className="bottom">{description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">second</div>
      </div>
    </div>
  );
}
