import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

const category = ["HATS", "JACKETS", "SNEAKERS", "WOMEN", "MEN"];

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
