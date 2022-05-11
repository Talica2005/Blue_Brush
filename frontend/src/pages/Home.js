import React from "react";
import sunnyday from "./386499266.jpg";
import { Button } from "react-bootstrap";
import "./home.css";

export const Home = () => {
  return (
    <>
      <div className="image-home">
        <img className="image" src={sunnyday} alt="Bilvard"></img>

        <div className="content-home">
          <div className="home-text">
            <div className="text1">
              <p>Look into the word of my art</p>
            </div>
            <div className="text2">
              <p>
                <i>Artist Blue Brush</i>
              </p>
            </div>
            <div className="text3">
              <p>
                Here you will meet watercolor lightness, oil viscosity and
                acrylic vigor
              </p>
            </div>
            <div className="button-view">
              <Button variant="secondary" href="/gallery">
                VIEW ARTS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
