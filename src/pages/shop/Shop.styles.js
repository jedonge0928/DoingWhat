import styled from "styled-components";

export const ShopPage = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  padding: 10px;
  box-sizing: border-box;
  max-width: 1920px;
  width: 100%;

  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
    margin-top: 70px;
  }
`;

export const ShopTitle = styled.h2`
  font-size: 1.7rem;
  padding: 10px;
  margin-bottom: 20px;
  @media ${({ theme }) => theme.device.xs} {
    text-align: center;
  }
`;
export const SearchBox = styled.div`
  display: flex;
  gap: 5px;
  @media ${({ theme }) => theme.device.xs} {
    justify-content: center;
    gap: 10px;
  }
`;
export const SearchInput = styled.input`
  padding: 5px 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #aaa;
`;
export const SearchBotton = styled.button`
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #6ea2df;
  background-color: #6ea2df;
  color: white;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
  &:hover {
    background-color: white;
    color: #6ea2df;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  }
`;
export const SearchCategory = styled.div`
  margin: 30px 0 10px;
  display: flex;
  gap: 5px;

  @media ${({ theme }) => theme.device.xs} {
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }
`;
export const CategoryItem = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  font-weight: ${({ Active }) => (Active ? "bold" : "normal")};
  color: ${({ Active }) => (Active ? "#fff" : "#aaa")};
  background-color: ${({ Active }) => (Active ? "#112d47" : "white")};
  border: ${({ Active }) => (Active ? "1px solid #112d47" : "1px solid  #aaa")};
  border-radius: 5px;

  transition: all 0.3s;
  &:hover {
    color: white;
    background-color: #112d47;
    border: 1px solid #112d47;
  }
`;

export const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: calc((100% - 20px) / 3);

  @media ${({ theme }) => theme.device.ms} {
    width: calc((100% - 20px) / 2);
  }
  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
  }
`;
export const ImageWrap = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
    display: block;
  }
`;
export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1.1rem;

  @media ${({ theme }) => theme.device.ms} {
    font-size: 1rem;
  }
  @media ${({ theme }) => theme.device.xs} {
    font-size: 1.3rem;
  }
`;
export const ItemTitle = styled.p`
  font-weight: bold;
  box-sizing: border-box;
`;
export const EngTitle = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  padding: 5px 10px;
  text-align: center;
`;
export const SoldOut = styled.div`
  color: white;
  font-weight: bold;
  background-color: black;
  display: inline-block;
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  margin: 5px 0;
  @media ${({ theme }) => theme.device.xs} {
    font-size: 1rem;
  }
`;
export const BeforePrice = styled.p`
  font-size: 1rem;
  color: #aaa;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AfterPrice = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;
export const TotalPrice = styled.div`
  width: 250px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: absolute;
    right: 0;
    top: 0;
    color: #0084ff;
  }

  @media ${({ theme }) => theme.device.ms} {
    width: 100%;
    display: flex;
    flex-direction: column;

    span {
      position: static;
    }
  }
`;
export const CartButton = styled.button`
  cursor: pointer;
  background-color: #81c3fc;
  border: 1px solid #81c3fc;
  width: 150px;
  color: white;
  height: 40px;
  border-radius: 5px;
  font-size: 1.1rem;
  margin: 0 auto;
  transition: all 0.3s;

  &:hover {
    background-color: white;
    color: #81c3fc;
  }

  @media ${({ theme }) => theme.device.ms} {
    width: 100%;
  }
`;
