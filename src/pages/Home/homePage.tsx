import "./homePage.scss";
import logo from "../../assets/bg.png";
export default function HomePage() {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            With its prestigious accolades and timeless allure, this artwork is
            destined to command attention, admiration, and, ultimately, a
            lucrative sale. Embrace the opportunity to elevate not
          </p>
        </div>
      </div>
      <div className="imageContainer">
        <img src={logo} alt="image" />
      </div>
    </div>
  );
}
