import React from "react";

import steph from "../../assets/steph.jpg";
import "./profile.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiReques";
function Profile() {
  const onLogOutHandler = async () => {
    try {
      // localStorage.getItem("user");

      const res = await apiRequest.post("/auth/logout");
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1> User Info</h1>
            <button> Update Profile</button>
          </div>

          <div className="info">
            <span>
              Avatar: <img src={steph} alt="profilephoto" />
            </span>
            <span>
              Username: <b> Stephen Chinag</b>
            </span>
            <span>
              E-mail: <b> stephenchinag@gmail.com</b>
            </span>
            <button onClick={onLogOutHandler}> Logout</button>
          </div>
          <div className="title">
            <h1> My List</h1>
            <button> Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1> Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default Profile;
