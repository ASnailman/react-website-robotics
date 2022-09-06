import React from "react";
import "./Button.css";
// import { Link } from "react-router-dom";

const STYLES = [
  "btn--primary",
  "btn--outline",
  "btn--about",
  "btn--teamtrailer",
  "btn--seasons",
];

const SIZES = ["button--medium", "btn--large", "btn--seasonsPage"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  link,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    // <Link to="/about" className="btn-mobile">
    <div>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        to={link}
      >
        {children}
      </button>
    </div>
    // </Link>
  );
};
