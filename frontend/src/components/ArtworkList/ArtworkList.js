import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { Row } from "react-bootstrap";
import { ArtworkItem } from "../ArtworkItem/ArtworkItem";

export const ArtworkList = observer(() => {
  const { artwork } = useContext(Context);

  return (
    <Row className="d-flex">
      {artwork.artworks.map((artwork) => (
        <ArtworkItem key={artwork.id} artwork={artwork} />
      ))}
    </Row>
  );
});
