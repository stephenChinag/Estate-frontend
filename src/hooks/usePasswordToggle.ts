import { useState } from "react";

const usePasswordToggle = () => {
  const [visible, setVisble] = useState(false);

  const togglePasswordVisibility = () => {
    setVisble((prevVisible) => !prevVisible);
  };
  return {
    visible,
    togglePasswordVisibility,
  };
};

export default usePasswordToggle;
