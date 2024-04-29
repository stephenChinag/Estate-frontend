import logo from "../../assets/logo.svg";
import "./Signup.scss";
import { PasswordStrength } from "../../components/PasswordStrength/PasswordStrength";

const SignUp = () => {
  const handleChange = (value: any) => console.log(value);

  return (
    <div className="page">
      <div className="login-card">
        <img src={logo} />
        <h2>Sign up </h2>
        <form className="login-form">
          <div className="username">
            <input
              autoComplete="off"
              className="control"
              type="email"
              placeholder="Email"
            />
            <input
              autoComplete="off"
              className="control"
              type="text"
              placeholder="Username"
            />
            <div id="spinner" className="spinner"></div>
          </div>
          <PasswordStrength placeholder="Password" onChange={handleChange} />

          <button className="control" type="button">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
