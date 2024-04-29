import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Login.scss";
const Login = () => {
  const handleChange = (value: any) => console.log(value);

  return (
    <div className="page">
      <div className="login-card">
        <img src={logo} />
        <h2>Login in </h2>
        <form className="login-form">
          <div className="username">
            <input
              autoComplete="off"
              className="control"
              type="email"
              placeholder="Email"
            />{" "}
            <input
              autoComplete="off"
              className="control"
              type="password"
              placeholder="Password"
            />
            <div id="spinner" className="spinner"></div>
          </div>

          <button className="control" type="button">
            Join Now
          </button>
        </form>
        <span className="terms">
          Check our <i></i>
          <Link to="/terms">terms and condition</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
