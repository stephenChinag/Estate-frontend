import "./homePage.scss";
import logo from "../../assets/bg.png";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export default function HomePage() {
  const { currentUser } = useContext(AuthContext);

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
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1> 16+</h1>
              <h2> Yeas Of Experience</h2>
            </div>

            <div className="box">
              <h1>200</h1>
              <h2> Award Gained</h2>
            </div>
            <div className="box">
              <h1> 2000+</h1>
              <h2> Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src={logo} alt="image" />
      </div>
    </div>
  );
}
