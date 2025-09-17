import React from "react";
import { Link } from "react-router";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>🌐 MyWebsite</Logo>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/carts">Carts</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

// Styled Components
const HeaderContainer = styled.header`
  background: #0f172a;
  color: #f8fafc;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  a {
    margin-left: 1.5rem;
    text-decoration: none;
    color: #cbd5e1;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #38bdf8;
    }
  }
`;
