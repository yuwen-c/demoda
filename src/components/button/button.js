import React from "react";
import "./button.styles.scss";

/** threes types of button:
 * default, google, invert
 */

const BUTTON_TYPES_ENUM = {
  google: "google-sign-in",
  invert: "inverted",
};

const Button = ({ children, buttonType, handler, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_ENUM[buttonType]}`}
      onClick={handler ? handler : null}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
