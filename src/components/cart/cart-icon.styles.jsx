import styled from "styled-components";
import { ReactComponent as Cart } from "../../assets/shopping-bag.svg";

export const CartSvg = styled(Cart)`
  width: 24px;
  height: 24px;
`;

export const CartSvgContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Count = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
