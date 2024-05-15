import React from "react";

import steph from "../../assets/steph.jpg";
import "./profile.scss";
function Profile() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1> User Info</h1>
            <button> Update PROFILE</button>
          </div>
          <div className="title">
            <h1> My List</h1>
            <button> Create New Post</button>
          </div>
          <div className="info">
            <span>
              Avatar: <img src={steph} width={"30px"} alt="profilephoto" />
            </span>
            <span>
              Username: <b> Stephen Chinag</b>
            </span>
            <span>
              E-mail: <b> stephenchinag@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1> Saved List</h1>
          </div>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default Profile;
