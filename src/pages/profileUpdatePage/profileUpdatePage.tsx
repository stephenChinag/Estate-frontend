import { useContext, FormEvent, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import noAvatar from "../../assets/noavatar.jpg";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/upload";

function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);
  const navigate = useNavigate();

  const HandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const { username, email, password } = Object.fromEntries(formData);
    try {
      const res = await apiRequest.put(`/users/${currentUser.userId}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });

      updateUser(res.data.user);
      console.log(res.data.user);
      navigate("/profile");

      //drp3oy23a
    } catch (err: any) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={HandleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span> {error}</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={avatar[0] || currentUser.avatar || noAvatar}
          alt=""
          className="avatar"
          loading="lazy"
        />

        <UploadWidget
          uwConfig={{
            cloudName: "drp3oy23a",
            uploadPreset: "estate",
            multiole: false,
            maxImagrFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
