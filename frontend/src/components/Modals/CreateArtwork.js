import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import {
  createArtwork,
  fetchGenres,
  fetchTechniques,
} from "../../http/artworkAPI";

export const CreateArtwork = observer(({ show, onHide }) => {
  const { artwork } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTechniques().then((data) => artwork.setTechniques(data));
    fetchGenres().then((data) => artwork.setGenres(data));
  }, [artwork]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addArtwork = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("genreId", artwork.selectedGenre.id);
    formData.append("techniqId", artwork.selectedTechniq.id);
    formData.append("info", JSON.stringify(info));
    createArtwork(formData).then((data) => onHide());
    console.log(info);
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
            <Dropdown.Toggle>
              {artwork.selectedTechniq.name || "Select techniq"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {artwork.techniques.map((techniq) => (
                <Dropdown.Item
                  onClick={() => artwork.setSelectedTechniq(techniq)}
                  key={techniq.id}
                >
                  {techniq.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {artwork.selectedGenre.name || "Select genre"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {artwork.genres.map((genre) => (
                <Dropdown.Item
                  onClick={() => artwork.setSelectedGenre(genre)}
                  key={genre.id}
                >
                  {genre.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Add artworks name"
            className="mt-3"
          ></Form.Control>
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Add artworks price"
            className="mt-3"
          ></Form.Control>
          <Form.Control
            className="mt-3"
            type="file"
            onChange={selectFile}
          ></Form.Control>
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Add new property
          </Button>
          {info.map((i) => (
            <Row className="mt-3" key={i.number}>
              <Col md={3}>
                <Form.Control
                  value={i.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                  placeholder="Enter property title"
                ></Form.Control>
              </Col>
              <Col md={3}>
                <Form.Control
                  value={i.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                  placeholder="Enter property description"
                ></Form.Control>
              </Col>
              <Col md={3}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant={"outline-danger"}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addArtwork}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});
