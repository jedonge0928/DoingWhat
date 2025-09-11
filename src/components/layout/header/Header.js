// Header.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";

import LoginButton from "../../button/LoginButton";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LoginModal from "../../modal/LoginModal";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;

  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 1000;

  transition: background-color 0.3s ease;
  background-color: ${({ $scrolled }) =>
    $scrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.2)"};

  @media ${({ theme }) => theme.device.ms} {
    justify-content: space-between;
    gap: 10px;
    background-color: ${({ $scrolled }) =>
      $scrolled ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.2)"};
    box-shadow: ${({ $scrolled }) =>
      $scrolled ? "0 4px 4px rgba(173, 173, 173, 0.5)" : "none"};
  }
`;

const MobileNavBar = styled.div`
  display: none;
  @media ${({ theme }) => theme.device.ms} {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

const MobileGnb = styled(RiMenu3Line)`
  font-size: 2rem;
  display: none;
  cursor: pointer;
  color: black;
  font-weight: bold;

  @media ${({ theme }) => theme.device.ms} {
    display: block;
  }
`;

const MobileUser = styled(FaRegUser)`
  font-size: 1.5rem;
  display: none;
  cursor: pointer;
  color: black;

  @media ${({ theme }) => theme.device.ms} {
    display: block;
  }
`;

const MobileShop = styled(HiOutlineShoppingBag)`
  font-size: 1.8rem;
  display: none;
  cursor: pointer;
  color: black;

  @media ${({ theme }) => theme.device.ms} {
    display: block;
  }
`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function gnbScrollTop() {
    return window.scrollTo(0,0)
  }
  const handleLogin = () => setShowLoginModal(true);

  return (
    <HeaderContainer $scrolled={scrolled}>
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <img
          src={process.env.PUBLIC_URL + "/img/doingWhatLogo.png"}
          alt="doing-what-logo"
          style={{ width: "100px" }}
          onClick={() => gnbScrollTop()}
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
