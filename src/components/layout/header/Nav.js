import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { nav } from "../../../contants/navigation";

const NavLayout = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media ${({ theme }) => theme.device.ms} {
    display: none;
  }
`;

const NavItem = styled(Link)`
  padding: 10px 10px;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s;

  color: ${({ $active }) => ($active ? "white" : "#112d47")};
  background-color: ${({ $active }) => ($active ? "#6EA2DF" : "transparent")};
  box-shadow: ${({ $active }) =>
    $active ? "0 4px 4px rgba(0,0,0,0.5)" : "none"};
  border-radius: ${({ $active }) => ($active ? "5px" : "0")};

  @media ${({ theme }) => theme.device.ms} {
    display: flex;
    width: 100%;
    justify-content: center;
    box-shadow: none;
  }
`;

export default function Nav() {
  const location = useLocation();

  return (
    <NavLayout>
      {nav.map((item) => (
        <NavItem
          key={item.id}
          to={item.path}
          $active={location.pathname.startsWith(item.path)}
        >
          {item.menu}
        </NavItem>
      ))}
    </NavLayout>
  );
}
