import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createTechniq } from "../../http/artworkAPI";

export const CreateTechniq = ({ show, onHide }) => {
  const [value, setValue] = useState("");

  const addTechniq = () => {
    createTechniq({ name: value }).then((data) => {
      setValue("");
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add techniq
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={"Enter techniq name"}
          ></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addTechniq}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
