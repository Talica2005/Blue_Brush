import React, { useState } from "react";
import { Container } from "react-bootstrap";
import photos from "./photos.json";
import "./gallery_content.css";
import Modal from "./ModalContent";

export default function GalleryContent() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = photos.photos.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = photos.photos[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = photos.photos.filter((item) => {
      return photos.photos.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = photos.photos.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = photos.photos[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = photos.photos.filter((item) => {
      return photos.photos.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <Container>
      <div className="gallery">
        {photos.photos.map((item, index) => (
          <div key={index} className="pics">
            <h2>{item.text}</h2>
            <img
              src={item.link}
              alt={item.text}
              style={{ width: "100%" }}
              onClick={() => handleClick(item, index)}
            />
          </div>
        ))}
        <div>
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              handelRotationRight={handelRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handelRotationLeft}
            />
          )}
        </div>
      </div>
    </Container>
  );
}
