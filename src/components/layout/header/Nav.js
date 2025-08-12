import { useLocation } from "react-router-dom";
import { nav } from "../../../contants/navigation";
import { NavItem, NavLayout } from "./Header.styles";

export default function Nav() {
  const location = useLocation();

  return (
    <NavLayout>
      {nav.map((item) => (
        <NavItem
          key={item.id}
          to={item.path}
          Active={location.pathname.startsWith(item.path)}
        >
          {item.menu}
        </NavItem>
      ))}
    </NavLayout>
  );
}
