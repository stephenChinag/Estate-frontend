import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/bg.png";
import "./register.scss";
import axios from "axios";
import apiRequest from "../../lib/apiReques";
interface FormData {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // handle Form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const formdata = new FormData(e.currentTarget);
    const username = formdata.get("username");
    const email = formdata.get("email");
    const password = formdata.get("password");
    // console.log(username, email, password);

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });

      //  localStorage.setItem("user" , JSON.stringify())

      navigate("/login");
    } catch (err: any) {
      setError(err.message);
      console.log(err);
    } finally {
      setIsLoading(false);
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
          <button disabled={isLoading}>Register</button>

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
