import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { BsCartPlusFill, BsFillShareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ARTWORK_ROUTE } from "../../utils/consts";

export const ArtworkItem = ({ artwork }) => {
  const navigate = useNavigate();

  return (
    <Col md={3} onClick={() => navigate(ARTWORK_ROUTE + "/" + artwork.id)}>
      <Card
        style={{ width: 210, cursor: "pointer" }}
        border={"light"}
        className="mt-5"
      >
        <div className="mt-2 mb-2">{artwork.name}</div>
        <Image
          width={210}
          height={210}
          src={process.env.REACT_APP_API_URL + artwork.img}
        />
        <div className="mt-1 mb-2 d-flex justify-content-between align-items-center">
          <div>
            <div>{artwork.price} kr</div>
            <div className="text-black-50">Free sheeping</div>
          </div>
          <div className="d-flex align-items-center">
            <BsCartPlusFill size={24} />

            <BsFillShareFill />
          </div>
        </div>
      </Card>
    </Col>
  );
};
