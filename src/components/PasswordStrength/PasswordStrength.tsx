import { useState } from "react";

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
