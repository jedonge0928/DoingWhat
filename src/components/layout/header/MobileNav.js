import { useLocation } from "react-router-dom";
import { nav } from "../../../contants/navigation";
import { MobileNavLayout, NavItem } from "./Header.styles";

import MobileLoginButton from "../../button/MobileLoginButton";

export default function MobileNav({ setMenuOpen }) {
  const location = useLocation();

  return (
    <MobileNavLayout>
      <MobileLoginButton />
      {nav.map((item) => (
        <NavItem
          key={item.id}
          to={item.path}
          Active={location.pathname.startsWith(item.path)}
          onClick={() => setMenuOpen(false)}
        >
          {item.menu}
        </NavItem>
      ))}
    </MobileNavLayout>  
  );
}
