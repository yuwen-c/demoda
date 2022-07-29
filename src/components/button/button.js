import React from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

/**
 * can be imported to where you want to use button, to prevent typo
 */
export const BUTTON_TYPES_ENUM = {
  base: "base",
  google: "google-sign-in",
  invert: "inverted",
};

/**
 * @param {*} buttonType can be one of the above three options
 * give a default value
 * @returns the imported button
 */
const getButton = (buttonType = BUTTON_TYPES_ENUM.base) =>
  // 其實還是transform的概念
  ({
    base: BaseButton,
    "google-sign-in": GoogleSignInButton,
    inverted: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  /**
   * 如果直接呼叫getButton，就沒法用children，可以把它指定為一個react component!
   */
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
