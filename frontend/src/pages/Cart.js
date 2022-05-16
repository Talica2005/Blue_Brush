import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";

export const Cart = () => {
  const artwork = [
    {
      id: 7,
      name: "Sunny day",
      price: 25000,
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKQ_-pD8oaKkIH8P-F1OMkettXx3Wnqy8WpIxRLB16gCLhkqUM",
    },
    {
      id: 2,
      name: "Stockholm",
      price: 5000,
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKQ_-pD8oaKkIH8P-F1OMkettXx3Wnqy8WpIxRLB16gCLhkqUM",
    },
  ];

  const info = [
    { id: 1, description: "Watercolor", title: "Techniq" },
    { id: 2, description: "Oil", title: "Techniq" },
    { id: 3, description: "Acrilyc", title: "Techniq" },
  ];

  const style = {
    backgroundColor: "white",
    border: "1px solid lightgrey",
  };

  return (
    <Container style={{ width: "70%" }}>
      <Row className="mt-3" style={{ backgroundColor: "white" }}>
        <h6>My cart</h6>
      </Row>
      {artwork.map((art) => (
        <Row style={style}>
          <Col md={3} className="ms-3 mt-3">
            <div
              className="mb-3"
              style={{ color: "#5f8eb8", fontSize: 20, fontWeight: 600 }}
              key={artwork.id}
            >
              {art.name}
            </div>
            <Row style={{ backgroundColor: "white" }}>
              {info.map((info) => (
                <div key={info.id} style={{ fontSize: 13 }}>
                  {info.title}: <b>{info.description}</b>
                </div>
              ))}
            </Row>
          </Col>
          <Col md={3} className=" mt-4 ms-3">
            <div key={artwork.id} style={{ fontSize: 15 }}>
              <b>{art.price}</b> SEK
            </div>
            <div style={{ fontSize: 13 }}>Free sheeping</div>
          </Col>
          <Col md={4} className="mt-3 d-flex align-items-center">
            <Row
              className="ms-3"
              key={artwork.id}
              style={{ backgroundColor: "white" }}
            >
              {art.img}
            </Row>
          </Col>
          <Col>
            <div
              md={1}
              className="mt-3 ms-3 mb-3"
              style={{ cursor: "pointer", textAlign: "center" }}
            >
              <AiOutlineDelete size={24} />
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};
