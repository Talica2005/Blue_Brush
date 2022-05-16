import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

import "./mininavbar.css";

export const MiniNavBar = observer(() => {
  const { artwork } = useContext(Context);
  return (
    <div>
      <Navbar className="mininavbar">
        <div className="ccontainer">
          <Nav className="mininavbar-nav">
            {artwork.techniques.map((techniq) => (
              <Nav.Link
                href="#home"
                style={{ cursor: "pointer" }}
                active={techniq.id === artwork.selectedTechniq.id}
                onClick={() => artwork.setSelectedTechniq(techniq)}
                key={techniq.id}
              >
                {techniq.name}
              </Nav.Link>
            ))}
          </Nav>
        </div>
      </Navbar>
    </div>
  );
});
