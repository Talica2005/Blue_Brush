import React, { useContext } from "react";
import { Context } from "../index";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BiLogInCircle, BiCart } from "react-icons/bi";
import blue from "./blue.png";
import "./NavBarAll.css";

export const NavBarAll = () => {
  const { user } = useContext(Context);
  return (
    <div className="nav-bar">
      <div className="cart_login">
        <a href="#login">
          <BiCart size={25} />
        </a>
        <a href="#login">
          <BiLogInCircle size={25} />
        </a>
      </div>

      <Navbar bg="white" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img className="img" src={blue} alt="BlueBrush" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="linknav1">
              <Nav.Link href="/home">HOME</Nav.Link>
              <Nav.Link href="/about">ABOUT</Nav.Link>
              <Nav.Link href="/gallery">GALLERY</Nav.Link>
              <Nav.Link href="/shop">SHOP</Nav.Link>
              <Nav.Link href="/contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
