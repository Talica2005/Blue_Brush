import React, { useContext, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

export const CreateArtwork = ({ show, onHide }) => {
  const { artwork } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { name: "", info: "", number: Date.now() }]);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add artwork
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Select techniq</Dropdown.Toggle>
            <Dropdown.Menu>
              {artwork.techniques.map((techniq) => (
                <Dropdown.Item key={techniq.id}>{techniq.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Select genre</Dropdown.Toggle>
            <Dropdown.Menu>
              {artwork.genres.map((genre) => (
                <Dropdown.Item key={genre.id}>{genre.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            placeholder="Add artworks name"
            className="mt-3"
          ></Form.Control>
          <Form.Control
            type="number"
            placeholder="Add artworks price"
            className="mt-3"
          ></Form.Control>
          <Form.Control className="mt-3" type="file"></Form.Control> <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Add new property
          </Button>
          <Row>
            <Col md={3}>
              <Form.Control placeholder="Enter property techniq"></Form.Control>
            </Col>
            <Col md={3}>
              <Form.Control placeholder="Enter property size"></Form.Control>
            </Col>
            <Col md={3}>
              <Form.Control placeholder="Enter property info"></Form.Control>
            </Col>
            <Col md={3}>
              <Button variant={"outline-danger"}>Delete</Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
