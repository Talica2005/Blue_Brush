import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { BsFillShareFill, BsCartPlusFill } from "react-icons/bs";

export const Artwork = () => {
  const artwork = {
    id: 7,
    name: "Sunny day",
    price: 25000,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKQ_-pD8oaKkIH8P-F1OMkettXx3Wnqy8WpIxRLB16gCLhkqUM",
  };

  // const info = [
  //   { id: 1, instruction: "Wash, dry", size: "30 x 40 cm" },
  //   { id: 2, instruction: "Wassssss", size: "30 x 40 cm" },
  //   { id: 3, instruction: "Wash,fffffffffffff dry", size: "40 x 30 cm" },
  // ];

  const info = {
    id: 1,
    techniq: "Watercolor",
    instruction: "Wash, dry",
    size: "30 x 40 cm",
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={8} className="d-flex flex-column align-items-center p-3">
          <Image
            width={350}
            height={450}
            src={artwork.img}
            style={{
              border: "2px solid lightgray",
              padding: "10px",
            }}
          />
        </Col>
        <Col md={4} style={{ width: 300 }}>
          <Row className="d-flex flex-column align-items-center p-3">
            <div className="mt-2 mb-2 d-flex justify-content-between">
              <h4 style={{ fontSize: 25, fontWeight: 600, color: "#5F8EB8" }}>
                {artwork.name}
              </h4>
              <div>
                <BsFillShareFill
                  style={{ fontSize: 20, fontWeight: 600, color: "grey" }}
                />
              </div>
            </div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>
              {artwork.price} SEK
            </div>
          </Row>

          <div className="d-flex flex-column mt-5 p-3">
            <Card>
              <Button variant={"secondary"}>
                Add to cart
                <BsCartPlusFill size={20} style={{ marginLeft: 15 }} />
              </Button>
            </Card>
          </div>

          <Row className="d-flex flex-column  p-3">
            <Row>
              <div>
                Techniq: <b>{info.techniq}</b>
              </div>
              <div>
                Size: <b>{info.size}</b>
              </div>
              <div>
                Care instructions: <b>{info.instruction}</b>
              </div>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
