import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArtworkList } from "../components/ArtworkList/ArtworkList";
import { GenreNavBar } from "../components/GenreNavBar";
import { MiniNavBar } from "../components/MiniNavBar/MiniNavBar";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {
  fetchArtworks,
  fetchGenres,
  fetchTechniques,
} from "../http/artworkAPI";
import { PaginationPages } from "../components/Pagination/PaginationPages";
import "./gallery.css";

export const Shop = observer(() => {
  const { artwork } = useContext(Context);

  useEffect(() => {
    fetchTechniques().then((data) => artwork.setTechniques(data));
    fetchGenres().then((data) => artwork.setGenres(data));
    fetchArtworks(null, null, 1, 9).then((data) => {
      artwork.setArtworks(data.rows);
      artwork.setTotalCount(data.count);
    });
  }, []);

  //change pages
  useEffect(() => {
    fetchArtworks(
      artwork.selectedTechniq.id,
      artwork.selectedGenre.id,
      artwork.page,
      10
    ).then((data) => {
      artwork.setArtworks(data.rows);
      artwork.setTotalCount(data.count);
    });
  }, [artwork.page, artwork.selectedTechniq, artwork.selectedGenre]);

  return (
    <div>
      <MiniNavBar />
      <div className="all-images">
        <a href="/shop">All works</a>
      </div>
      <Container>
        <Row className="mt-3">
          <Col md={2} className="mt-3">
            <GenreNavBar />
          </Col>
          <Col md={10}>
            <ArtworkList />
            <PaginationPages />
          </Col>
        </Row>
      </Container>
    </div>
  );
});
