import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartModalPage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100vh;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`;

export const ModalCart = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 500px;
  padding: 30px 20px;
  border-radius: 5px;
  background-color: white;
  transform: translate(-50%, -50%);
`;
export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  jusfity-content: center;
  gap: 30px;
`;
export const ModalTitle = styled.h2`
  font-size: 1.6rem;
  text-align: center;
`;

export const ModalBtn = styled.div`
  display: flex;
  gap: 10px;
  font-size: 1.1rem;
  text-align: center;
`;
export const CartLink = styled(Link)`
  display: block;
  flex: 1;
  border: 1px solid #81c3fc;
  background-color: #81c3fc;
  color: white;
  padding: 20px;
  font-size: 1.1rem;
  cursor: pointer;
`;
export const ShopBack = styled.button`
  display: block;
  flex: 1;
  border: 1px solid #81c3fc;
  background-color: #ffffffff;
  color: #81c3fc;
  padding: 20px;
  font-size: 1.1rem;
  cursor: pointer;
`;
export const ModalClose = styled.p`
  position: absolute;
  top: 0;
  right: 0;

  color: #030303ff;
  padding: 10px;
  font-size: 2rem;
`;
