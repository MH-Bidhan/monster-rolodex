import React from "react";
import "./button.styles.scss";

const Button = ({
  buttonSize = "btn-big",
  buttonStatus = "btn-primary",
  name = "Button",
  handleEvent,
}) => {
  return (
    <button
      onClick={() => handleEvent()}
      className={`btn ${buttonStatus} ${buttonSize} `}
    >
      {name}
    </button>
  );
};

export default Button;
