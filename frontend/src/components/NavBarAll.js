import React, { useContext } from "react";
import { Context } from "..";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { BiLogInCircle, BiCart } from "react-icons/bi";
import blue from "./blue.png";
import "./NavBarAll.css";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

export const NavBarAll = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="nav-bar">
      <div className="cart_login">
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white", paddingRight: 15 }}>
            <Button
              variant={"outline-dark"}
              onClick={() => navigate(ADMIN_ROUTE)}
              className="ml-auto"
              style={{ marginRight: 15 }}
            >
              Admin panel
            </Button>
            <Button
              variant={"outline-dark"}
              className="ml-2"
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Logout
            </Button>
          </Nav>
        ) : (
          <Nav>
            <Button
              variant={"outline-dark"}
              onClick={() => user.setIsAuth(true)}
            >
              Authorization
            </Button>
          </Nav>
        )}
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
              <Nav.Link to={SHOP_ROUTE}>SHOP</Nav.Link>
              <Nav.Link href="/contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
});
