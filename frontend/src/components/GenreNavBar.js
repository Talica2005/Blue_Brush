import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";

export const GenreNavBar = observer(() => {
  const { artwork } = useContext(Context);
  return (
    <div>
      <ListGroup>
        {artwork.genres.map((genre) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={genre.id === artwork.selectedGenre.id}
            onClick={() => artwork.setSelectedGenre(genre)}
            key={genre.id}
          >
            {genre.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
});
