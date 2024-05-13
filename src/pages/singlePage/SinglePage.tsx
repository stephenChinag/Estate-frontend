import { useParams } from "react-router-dom";
import { singlePostData } from "../../lib/dummyData";
import { userData } from "../../lib/dummyData";
import location from "../../assets/location.png";
import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/map";
import chat from "../../assets/chat.png";
import save from "../../assets/save.png";
import util from "../../assets/utility.png";
import bed from "../../assets/bed.png";
import size from "../../assets/size.png";
import bath from "../../assets/bath.png";
export default function SinglePage() {
  const params = useParams();
  console.log(params.id);

  const { title, address, price, description, images } = singlePostData;
  const { img, name } = userData;
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={images} />
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
        <div className="wrapper">
          <p className="title">General </p>
          <div className="listVertical">
            <div className="feature">
              <img src={util} alt="" />
              <div className="featureText">
                <span> Utilities</span>
                <p> Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src={util} alt="" />
              <div className="featureText">
                <span> Pet Policy</span>
                <p> Pet is Allpowed</p>
              </div>
            </div>
            <div className="feature">
              <img src={util} alt="" />
              <div className="featureText">
                <span> Pet Policy</span>
                <p> Pet is Allpowed</p>
              </div>
            </div>

            <div className="feature">
              <img src={util} alt="" />
              <div className="featureText">
                <span> Property Fees</span>
                <p> Must have 3million naira in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes </p>
          <div className="sizes">
            <div className="size">
              <img src={size} alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src={bed} alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src={bath} alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places </p>
          <div className="listHorizontal"></div>
          <p className="title">Location </p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src={chat} alt="" />
              send am message
            </button>
            <button>
              <img src={save} alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
