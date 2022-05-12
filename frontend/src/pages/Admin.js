import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { CreateArtwork } from "../components/Modals/CreateArtwork";
import { CreateGenre } from "../components/Modals/CreateGenre";
import { CreateTechniq } from "../components/Modals/CreateTechniq";

export const Admin = () => {
  const [techniqVisible, setTechniqVisible] = useState(false);
  const [genreVisible, setGenreVisible] = useState(false);
  const [artworkVisible, setArtworkVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={"outline-dark"}
        className="mt-2 p-2"
        onClick={() => setTechniqVisible(true)}
      >
        Add techniq
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2 p-2"
        onClick={() => setGenreVisible(true)}
      >
        Add genre
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2 p-2"
        onClick={() => setArtworkVisible(true)}
      >
        Add artwork
      </Button>
      <CreateTechniq
        show={techniqVisible}
        onHide={() => setTechniqVisible(false)}
      />
      <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)} />
      <CreateArtwork
        show={artworkVisible}
        onHide={() => setArtworkVisible(false)}
      />
    </Container>
  );
};
