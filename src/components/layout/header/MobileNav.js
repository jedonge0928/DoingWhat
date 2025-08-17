// MobileNav.jsx
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { nav } from "../../../contants/navigation";
import MobileLoginButton from "../../button/MobileLoginButton";

const NavItem = styled(Link)`
  padding: 10px 10px;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s;

  color: ${({ $active }) => ($active ? "white" : "#112d47")};
  background-color: ${({ $active }) => ($active ? "#6EA2DF" : "transparent")};
  box-shadow: ${({ $active }) =>
    $active ? "0 4px 4px rgba(0, 0, 0, 0.5)" : "none"};
  border-radius: ${({ $active }) => ($active ? "5px" : "0")};

  @media ${({ theme }) => theme.device.ms} {
    display: flex;
    width: 100%;
    justify-content: center;
    box-shadow: none;
  }
`;

const MobileNavLayout = styled.div`
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

export default function MobileNav({ setMenuOpen }) {
  const location = useLocation();

  return (
    <MobileNavLayout>
      <MobileLoginButton />
      {nav.map((item) => (
        <NavItem
          key={item.id}
          to={item.path}
          $active={location.pathname.startsWith(item.path)}
          onClick={() => setMenuOpen(false)}
        >
          {item.menu}
        </NavItem>
      ))}
    </MobileNavLayout>
  );
}
