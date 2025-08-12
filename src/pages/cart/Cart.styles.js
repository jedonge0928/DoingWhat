import styled from "styled-components";

export const NotInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const CartPage = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  box-sizing: border-box;
  max-width: 100%;
`;
export const CartTitle = styled.h2`
  font-size: 1.7rem;
  padding: 20px 10px;
  border-bottom: 1px solid #e6e6e6;
`;

export const CartMain = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

export const CartText = styled.ul`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
`;
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px #6ea1df;

  @media ${({ theme }) => theme.device.ms} {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ProductTitle = styled.div`
  width: 200px;
  font-size: 1.2rem;
  @media ${({ theme }) => theme.device.ms} {
    width: 100%;
  }
`;

export const ProductNum = styled.div`
  display: flex;
  gap: 10px;
  font-size: 1.2rem;
  div {
    padding: 20px;
    border: 1px solid #6ea1df;
    border-radius: 5px;
  }

  @media ${({ theme }) => theme.device.ms} {
    div {
      padding: 20px;
    }
  }
`;

export const SubBtn = styled.div`
  cursor: pointer;
`;
export const AddBtn = styled.div`
  cursor: pointer;
`;

export const RegularPrice = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1rem;
  color: #a1a1a1;

  @media ${({ theme }) => theme.device.ms} {
    display: none;
  }
`;
export const SalePrice = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.2rem;
`;

export const Sale = styled.p`
  color: #1981e5;
`;
export const DeleteBtn = styled.button`
  display: inline-block;
  border: none;
  background-color: #c4c4c4ff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #ff0000;
  }

  @media ${({ theme }) => theme.device.ms} {
    width: 100%;
    background-color: #ff0000;
  }
`;

export const TotalPrice = styled.h3`
  text-align: right;
  margin-top: 1rem;
  font-size: 1.5rem;
`;

export const Buy = styled.div`
  margin: 20px auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: right;
  align-items: center;
`;
export const BuyBtn = styled.button`
  background-color: #6ea1df;
  border: 1px solid #6ea1df;
  padding: 10px 100px;
  color: white;
  font-size: 1.3rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: white;
    color: #6ea1df;
  }

  @media ${({ theme }) => theme.device.ms} {
    width: 100%;
  }
`;
