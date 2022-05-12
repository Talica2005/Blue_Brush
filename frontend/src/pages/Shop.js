import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArtworkList } from "../components/ArtworkList/ArtworkList";
import { GenreNavBar } from "../components/GenreNavBar";
import { MiniNavBar } from "../components/MiniNavBar/MiniNavBar";

export const Shop = () => {
  return (
    <div>
      <MiniNavBar />
      <Container>
        <Row className="mt-5">
          <Col md={3}>
            <GenreNavBar />
          </Col>
          <Col md={9}>
            <ArtworkList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
