import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./mininavbar.css";

export const MiniNavBar = () => {
  return (
    <div>
      <Navbar>
        <Container className="mininavbar">
          <Nav className="mininavbar-nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
