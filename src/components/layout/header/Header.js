import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../../button/LoginButton";
import {
  HeaderContainer,
  MobileGnb,
  MobileNavBar,
  MobileShop,
  MobileUser,
} from "./Header.styles";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LoginModal from "../../modal/LoginModal";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    return setShowLoginModal(true);
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <img
          src={process.env.PUBLIC_URL + "/img/doingWhatLogo.png"}
          alt="doing-what-logo"
          style={{ width: "100px" }}
        />
      </Link>

      <Nav />
      <LoginButton onClick={handleLogin} />
      <MobileNavBar>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>
          <MobileShop />
        </Link>
        <MobileUser />
        <MobileGnb onClick={toggleMenu} />
      </MobileNavBar>
      {menuOpen && <MobileNav onClick={toggleMenu} setMenuOpen={setMenuOpen} />}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </HeaderContainer>
  );
}
