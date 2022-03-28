import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.div`
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const Nav = styled.nav`
  height: 100vh;
  min-width: 65px;
  background-color: #12173a;
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-content: center;
  box-shadow: 0 0 15px -5px;
  align-items: center;
`;

export const NavLogo = styled.div`
  padding-top: 20px;
  hr {
    margin: 20px 0;
  }
`;

export const NavIcon = styled(Link)`
  height: 40px;
  width: 40px;
  border: solid 2px #fff;
  border-radius: 10px;
  display: flex;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#2fa4ff" : "")};

  &:hover {
    background-color: #045493;
  }

  svg {
    align-self: center;
    margin: 0 auto;
    color: #fff;
    font-size: 25px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const TopLinks = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export const BottomLinks = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 20px;
  hr {
    margin: 0 0;
  }
`;
