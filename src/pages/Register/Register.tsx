import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/bg.png";
import "./register.scss";
import axios from "axios";
interface FormData {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const username = formdata.get("username");
    const email = formdata.get("email");
    const password = formdata.get("password");
    // console.log(username, email, password);

    try {
      const res = await axios.post("http://localhost:8080/api/auth/register", {
        username,
        email,
        password,
      });

      navigate("/login");
    } catch (err: any) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button>Register</button>

          <span> {error ? error : ""}</span>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Register;
