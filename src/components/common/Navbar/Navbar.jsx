import React from "react";
import { Container, Login, NavbarWrapper, User } from "./NavbarStyle";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import { NavbarData } from "../../../mock/NavbarMock";
import { ReactComponent as Burger } from "../../../assets/icons/burgerNav.svg";

const Navbar = () => {
  const location = useLocation();
  return (
    <NavbarWrapper>
      <Container>
        <span className="burger">
          <Burger />
        </span>
        <Link className="flex1" to="/">
          <img src={Logo} alt="Logo" />
          <h2>F2Movies</h2>
        </Link>
        <nav>
          {NavbarData.map((value) => {
            return location.pathname === "/" ? (
              value.visible && (
                <li key={value.id}>
                  <NavLink to={value.path}>{value.title}</NavLink>
                </li>
              )
            ) : (
              <li key={value.id}>
                <NavLink to={value.path}>{value.title}</NavLink>
              </li>
            );
          })}
        </nav>
        <Login className="flex1">
          <User />
          <p>login</p>
          <span> / </span>
          <p>register</p>
        </Login>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
