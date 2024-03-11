import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { keyframes, useTheme } from "styled-components";
import { DiCode } from "react-icons/di";
import { FaBars } from "react-icons/fa";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  padding: 0 6;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const GithubButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  :hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const shineAnimation = keyframes`
    0% {
        filter: brightness(100%);
    }
    100% {
        filter: brightness(800%);
    }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const LogoContainer = styled.div`
  transition: filter 0.3s ease;
  animation: ${shineAnimation} 3s linear infinite;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
            }}
          >
            <DiCode size="3rem" /> <Span>Daniel Hedenberg</Span>
          </a>
        </NavLogo>

        <MobileIcon>
          <FaBars
            onClick={() => {
              setOpen(!open);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Daniel</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Erfarenhet</NavLink>
          <NavLink href="#projects">Projekt</NavLink>
          <NavLink href="#certifikat">Certifikat</NavLink>
          <NavLink href="#education">Utbildning</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton onClick={() => window.location.href = "https://github.com/pinoyinvestor"}>
            GitHub Profil
          </GithubButton>
        </ButtonContainer>
      </NavContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileMenuLinks href="#about" onClick={() => setOpen(!open)}>Daniel</MobileMenuLinks>
          <MobileMenuLinks href="#skills" onClick={() => setOpen(!open)}>Skills</MobileMenuLinks>
          <MobileMenuLinks href="#experience" onClick={() => setOpen(!open)}>Erfarenhet</MobileMenuLinks>
          <MobileMenuLinks href="#projects" onClick={() => setOpen(!open)}>Projekt</MobileMenuLinks>
          <MobileMenuLinks href="#certifikat" onClick={() => setOpen(!open)}>Certifikat</MobileMenuLinks>
          <MobileMenuLinks href="#education" onClick={() => setOpen(!open)}>Utbildning</MobileMenuLinks>
          <ButtonContainer>
            <GithubButton onClick={() => window.location.href = "https://github.com/pinoyinvestor"}>
              GitHub Profil
            </GithubButton>
          </ButtonContainer>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
