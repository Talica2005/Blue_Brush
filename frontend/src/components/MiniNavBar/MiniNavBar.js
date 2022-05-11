import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./mininavbar.css";

export const MiniNavBar = () => {
  return (
    <div>
      <Navbar className="mininavbar">
        <div className="ccontainer">
          <Nav className="mininavbar-nav">
            <Nav.Link href="#home">WATERCOLOR</Nav.Link>
            <Nav.Link href="#features">ACRILYC</Nav.Link>
            <Nav.Link href="#pricing">OIL</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};
