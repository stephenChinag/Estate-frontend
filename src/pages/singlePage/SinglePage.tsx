import { useLoaderData, useParams } from "react-router-dom";
import { singlePostData } from "../../lib/dummyData";
import { userData } from "../../lib/dummyData";
import location from "../../assets/location.png";
import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/map";
import chat from "../../assets/chat.png";
import save from "../../assets/save.png";
import util from "../../assets/utility.png";
import pet from "../../assets/pet.png";
import bed from "../../assets/bed.png";
import size from "../../assets/size.png";
import bath from "../../assets/bath.png";
import school from "../../assets/school.png";
import bus from "../../assets/bus.png";
import restaurant from "../../assets/restaurant.png";

const mapItems = [
  {
    id: singlePostData.id,
    latitude: singlePostData.latitude,
    longitude: singlePostData.longitude,
    title: singlePostData.title,
    img: singlePostData.images[0], // Use the first image as a preview
    bedroom: singlePostData.bedRooms,
    bathroom: singlePostData.bathroom,
    price: singlePostData.price,
  },
];

export default function SinglePage() {
  const post = useLoaderData();

  console.log(post);

  const params = useParams();
  console.log(params.id);

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1> {post.title}</h1>
                <div className="address">
                  <img src={location} alt="" loading="lazy" />
                  <span>{post.address}</span>
                </div>
                <div className="price"> ${post.price}</div>
              </div>
              <div className="user">
                <img src={post.userId.avatar} alt="user" loading="lazy" />
                <span>{post.userId.username}</span>
              </div>
            </div>
            <div className="bottom">{post.postDetail.desc}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General </p>
          <div className="listVertical">
            <div className="feature">
              <img src={util} alt="" loading="lazy" />
              <div className="featureText">
                <span> Utilities</span>
                {post.postDetail.utilities === "owner" ? (
                  <p> Owner is resposible</p>
                ) : (
                  <p> Renter is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src={pet} alt="" />
              <div className="featureText">
                <span> Pet Policy</span>
                {post.postDetail.pet === "allowed" ? (
                  <p> Pets Allowed </p>
                ) : (
                  <p> Pet is not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src={util} alt="" />
              <div className="featureText">
                <span> Income Policy</span>
                <p>{post.postDetail.income}</p>
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
              <img src={size} alt="" loading="lazy" />
              <span>{post.postDetail.size} sqft</span>
            </div>
            <div className="size">
              <img src={bed} alt="" loading="lazy" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src={bath} alt="" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places </p>
          <div className="listHorizontal">
            <div className="feature">
              <img src={school} alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{post.postDetail.school} away</p>
              </div>
            </div>
            <div className="feature">
              <img src={bus} alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus} away</p>
              </div>
            </div>
            <div className="feature">
              <img src={restaurant} alt="" loading="lazy" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant} away</p>
              </div>
            </div>
          </div>
          <p className="title">Location </p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button>
              <img src={chat} alt="" />
              send am message
            </button>
            <button>
              <img src={save} alt="" loading="lazy" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
