import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/bg.png";
import { FormEvent } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });
      console.log(res.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleLoginSubmit}>
          <h1>Welcome back</h1>
          <input name="email" type="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button>Login</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Login;
