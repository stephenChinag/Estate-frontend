import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/bg.png";
import { FormEvent, useContext, useState } from "react";
import apiRequest from "../../lib/apiReques";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { updateUser } = useContext(AuthContext);

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        email,
        password,
      });
      // console.log(res.data);
      updateUser(res.data);
      navigate("/");
    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleLoginSubmit}>
          <h1>Welcome back</h1>
          <input name="email" required type="email" placeholder="Email" />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />

          {error && <span> {error}</span>}
          <button disabled={isLoading}>Login</button>

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
