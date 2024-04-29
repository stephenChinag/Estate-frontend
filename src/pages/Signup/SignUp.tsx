import { useState } from "react";
import logo from "../../assets/logo.svg";
import "./Signup.scss";

type PasswordStrengthProps = {
  placeholder: string;
  onChange: (value: string) => void;
};
const strengthLabels = ["weak", "medium", "medium", "strong"];

export const PasswordStrength = ({
  placeholder,
  onChange,
}: PasswordStrengthProps) => {
  const [strength, setStrength] = useState("");

  const getStrength = (password: string) => {
    let strengthIndicator = -1;

    if (/[a-z]/.test(password)) strengthIndicator++;
    if (/[A-Z]/.test(password)) strengthIndicator++;
    if (/\d/.test(password)) strengthIndicator++;
    if (/[^a-zA-Z0-9]/.test(password)) strengthIndicator++;

    if (password.length >= 16) strengthIndicator++;

    return strengthLabels[strengthIndicator];
  };

  const handleChange = (event: any) => {
    setStrength(getStrength(event.target.value));
    onChange(event.target.value);
  };

  return (
    <>
      <input
        name="password"
        spellCheck="false"
        className="control"
        type="password"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <div className={`bars ${strength}`}>
        <div></div>
      </div>
      <div className="strength">{strength && `${strength} password`}</div>
    </>
  );
};
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
