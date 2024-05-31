import React, { useContext, useEffect } from "react";
import noAvatar from "../../assets/noavatar.jpg";
import "./profile.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiReques";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
function Profile() {
  const navigate = useNavigate();

  const { updateUser, currentUser } = useContext(AuthContext);

  const onLogOutHandler = async () => {
    try {
      // localStorage.getItem("user");

      await apiRequest.post("/auth/logout");

      localStorage.removeItem("user");
      updateUser(null);
      navigate("/");
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1> User Info</h1>
            <button onClick={() => navigate("/profile/update")}>
              {" "}
              Update Profile
            </button>
          </div>

          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || noAvatar} alt="profilephoto" />
            </span>
            <span>
              Username: <b> {currentUser.username}</b>
            </span>
            <span>
              E-mail: <b> {currentUser.email}</b>
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
