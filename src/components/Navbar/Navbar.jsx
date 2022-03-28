import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { BsPeople, BsInbox } from "react-icons/bs";
import { FiSettings, FiDatabase } from "react-icons/fi";
import { AiOutlineBarChart } from "react-icons/ai";
import "./Navbar.style.js";
import {
  Nav,
  NavIcon,
  NavLogo,
  LinkContainer,
  TopLinks,
  BottomLinks,
  Page,
} from "./Navbar.style.js";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import LogoutMessage from "../Logout-Message/LogoutMessage";

const Navbar = () => {
  // Params are used to keep track of current url path
  const { path } = useParams();
  // State for showing the logout message
  const [showLogout, setShowLogout] = useState(false);

  const handleClick = () => {
    setShowLogout(true);
  };

  return (
    <Page>
      <Nav>
        <NavLogo>
          {/* When the current path matches, selected is true and styles are applied */}
          <NavIcon to="/" selected={path === undefined}>
            <AiOutlineBarChart />
          </NavIcon>
          <hr />
        </NavLogo>
        <LinkContainer>
          <TopLinks>
            <NavIcon to="/inbox" selected={path === "inbox"}>
              <BsInbox />
            </NavIcon>
            <NavIcon to="/clients" selected={path === "clients"}>
              <BsPeople />
            </NavIcon>
            <NavIcon to="/data" selected={path === "data"}>
              <FiDatabase />
            </NavIcon>
          </TopLinks>
          <BottomLinks>
            <hr />
            <NavIcon to="/settings" selected={path === "settings"}>
              <FiSettings />
            </NavIcon>
            <NavIcon as='div' onClick={handleClick}>
              <BiLogOut />
            </NavIcon>
          </BottomLinks>
        </LinkContainer>
      </Nav>
      {showLogout && <LogoutMessage setShowLogout={setShowLogout} />}
      <Outlet />
    </Page>
  );
};

export default Navbar;
