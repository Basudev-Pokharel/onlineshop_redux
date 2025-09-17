import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo>🌐 MyWebsite</Logo>
        <Nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </Nav>
        <Copy>
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </Copy>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

// Styled Components
const FooterContainer = styled.footer`
  background: #0f172a;
  color: #f8fafc;
  padding: 2rem 1rem;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Logo = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Nav = styled.nav`
  margin-bottom: 1rem;

  a {
    margin: 0 0.8rem;
    text-decoration: none;
    color: #cbd5e1;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #38bdf8;
    }
  }
`;

const Copy = styled.p`
  font-size: 0.9rem;
  color: #94a3b8;
`;
