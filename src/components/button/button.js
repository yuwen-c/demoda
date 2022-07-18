import React from "react";
import "./button.styles.scss";

/** threes types of button:
 * default, google, invert
 */

const BUTTON_TYPES_ENUM = {
  google: "google-sign-in",
  invert: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_ENUM[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
