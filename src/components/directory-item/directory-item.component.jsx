import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BackgroundImageDiv,
  DirectoryContainer,
  TitleBlock,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <DirectoryContainer>
      <BackgroundImageDiv
        imageUrl={imageUrl}
        // style={{
        //   backgroundImage: `url(${imageUrl})`,
        // }}
      />
      <TitleBlock onClick={() => handleNavigate(`shop/${title}`)}>
        <span>{title}</span>
        <span>Shop Now</span>
      </TitleBlock>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
