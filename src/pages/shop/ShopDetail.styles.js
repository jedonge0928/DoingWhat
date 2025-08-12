import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ShopDetailPage = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  box-sizing: border-box;
  max-width: 1280px;
  width: 100%;
`;

export const ProductDetail = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;

  @media ${({ theme }) => theme.device.ms} {
    flex-direction: column;
    gap: 20px;
  }
`;
export const ProductDetailText = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media ${({ theme }) => theme.device.ms} {
    font-size: 1.2rem;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
  }
  @media ${({ theme }) => theme.device.xs} {
    font-size: 1rem;
    text-align: center;
    padding: 0 10px;
    box-sizing: border-box;
  }
`;
export const ProductImg = styled.div`
  max-width: 650px;
  height: auto;
  box-shadow: 0 1px 11px 0 #a6ceff;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  @media ${({ theme }) => theme.device.ms} {
    margin: 10px;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 1.9rem;
  margin-bottom: 20px;
`;

export const ProductDelivery = styled.div`
  font-size: 1.3rem;
  display: flex;
  gap: 20px;

  p:nth-child(1) {
    width: 100px;
  }
  span {
    font-size: 1rem;
  }

  @media ${({ theme }) => theme.device.ms} {
    font-size: 1rem;
    p:nth-child(1) {
      max-width: 80px;
      text-align: left;
      box-sizing: border-box;
    }
    span {
      font-size: 1rem;
    }
  }
`;
export const ProductNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: 1.3rem;

  div {
    display: flex;
    gap: 10px;

    div {
      padding: 10px 20px;
      border: 1px solid #6ea1df;
      border-radius: 5px;
    }

    &:nth-child(1),
    &:nth-child(3) {
      cursor: pointer;
    }
  }
`;
export const ProductRegularPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #a4a4a4;
  font-size: 1.3rem;
`;
export const ProductSale = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1981e5;
  font-size: 1.5rem;
  font-weight: bold;

  p:nth-child(1) {
    color: #000000;
  }
`;
export const ProductTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000ff;
  font-size: 1.8rem;
  font-weight: bold;
`;
export const ProductButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  color: #000000ff;
  font-size: 1.8rem;
  font-weight: bold;

  button {
    width: 100%;
    height: 50px;
    font-size: 1.1rem;
    background-color: white;
    border: 1px solid #cfcfcfff;
    color: #ccccccff;
    border-radius: 5px;
    cursor: pointer;
  }
  button:nth-child(1) {
    transition: all 0.3s;
    &:hover {
      border: 1px solid #6db2ef;
      font-size: 1.3rem;
      color: #6db2ef;
    }
  }
  button:nth-child(2) {
    background-color: #6db2ef;
    color: white;
    transition: all 0.3s;
    &: hover {
      background-color: white;
      border: 1px solid #6db2ef;
      color: #6db2ef;
    }
  }
`;

/**detail Product gnb*/

export const ProductGnb = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  gap: 10px;
`;
export const GnbLink = styled(NavLink)`
  flex: 1;
  height: 50px;
  line-height: 50px;
  display: block;
  color: #666;
  text-align: center;
  border: 1px solid #e5e5e5;
  border-radius: 5px;

  &.active {
    border-color: #6ea2df;
    color: #111;
    box-shadow: 0 0 0 2px rgba(110, 162, 223, 0.15) inset;
  }
`;

/*product detail */

export const TabDetailDiv = styled.div`
  max-width: 1000px;
  box-sizing: border-box;
  margin: 0 auto;
`;
export const TabDetailImg = styled.img`
  width: 100%;
  box-sizing: border-box;
`;
/*product info */
export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.5rem;

  @media ${({ theme }) => theme.device.xs} {
    font-size: 0.9rem;
  }
`;
