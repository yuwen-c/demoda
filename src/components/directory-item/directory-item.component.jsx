import React from "react";
import { Link } from "react-router-dom";
import {
  BackgroundImageDiv,
  DirectoryContainer,
  TitleBlock,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryContainer>
      <BackgroundImageDiv
        imageUrl={imageUrl}
        // style={{
        //   backgroundImage: `url(${imageUrl})`,
        // }}
      />
      {/* // to={`shop/${title}`} */}
      <TitleBlock>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </TitleBlock>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
