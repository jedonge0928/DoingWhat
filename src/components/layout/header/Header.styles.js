import { RiMenu3Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${({ scrolled }) =>
    scrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.2)"};
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 1000;
  transition: background-color 0.3s ease;

  @media ${({ theme }) => theme.device.ms} {
    justify-content: space-between;
    gap: 10px;
    background-color: ${({ scrolled }) =>
      scrolled ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.2)"};
    box-shadow: ${({ scrolled }) =>
      scrolled ? "0 4px 4px rgba(173, 173, 173, 0.5);" : "white;"};
  }
`;

export const NavLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media ${({ theme }) => theme.device.ms} {
    display: none;
  }
`;
export const NavItem = styled(Link)`
  padding: 10px 10px;
  color: ${({ Active }) => (Active ? "white" : "#112d47")};
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s;
  background-color: ${({ Active }) => (Active ? "#6EA2DF" : null)};
  box-shadow: ${({ Active }) =>
    Active ? "0 4px 4px rgba(0, 0, 0, 0.5);" : null};
  border-radius: ${({ Active }) => (Active ? "5px" : null)};

  @media ${({ theme }) => theme.device.ms} {
    display: flex;
    width: 100%;
    justify-content: center;
    box-shadow: none;
  }
`;

export const ButtonStyle = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: #6ea2df;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  @media ${({ theme }) => theme.device.ms} {
    display: none;
  }
`;
export const MobileButtonStyle = styled.button`
  display: none;
  @media ${({ theme }) => theme.device.ms} {
    display: block;
    border: none;
    width: 100%;
    padding: 10px 20px;
    background-color: #6ea2df;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const MobileNavBar = styled.div`
  display: none;
  @media ${({ theme }) => theme.device.ms} {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
export const MobileGnb = styled(RiMenu3Line)`
  font-size: 2rem;
  display: none;
  cursor: pointer;
  color: black;
  font-weight: bold;

  @media ${({ theme }) => theme.device.ms} {
    display: block;
  }
`;
export const MobileUser = styled(FaRegUser)`
  font-size: 1.5rem;
  display: none;
  cursor: pointer;
  color: black;

  @media ${({ theme }) => theme.device.ms} {
    display: block;
  }
`;
export const MobileShop = styled(HiOutlineShoppingBag)`
  font-size: 1.8rem;
  display: none;
  cursor: pointer;
  color: black;

  @media ${({ theme }) => theme.device.ms} {
    display: block;
  }
`;

/**MobileGnb */
export const MobileNavLayout = styled.div`
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding: 10px;
  box-sizing: border-box;
  display: none;

  @media ${({ theme }) => theme.device.ms} {
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
`;
