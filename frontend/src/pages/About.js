import React from "react";
import sunnyday from "./sax.jpg";
import italy from "./23.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./about.css";

export const About = () => {
  return (
    <Container>
      <Row className="row">
        <Col sm={12} md={7}>
          <div className="about">
            <img className="image-about" src={sunnyday} alt="Bilvard"></img>

            <div className="content-home">
              <div className="home-text">
                <div className="text1">
                  <p>Biography</p>
                </div>
                <div className="text2">
                  <p>
                    <i>Artist Blue Brush</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={5}>
          <div>
            <div className="content-about">
              <div className="hi">Hi!</div>

              <div className="about-text">
                <br />I am a fine artist with a great love for watercolor
                graphics from Sweden.I also prefer oil and acrylic technique in
                painting.
                <br />
                <br />
                My works are defined not only by the tenderness of the brush,
                but also by the hardness of the artistic spatula. And the world
                around is the main source of inspiration.
                <br />
                <br /> My goal is to capture feminine strength, sensuality,
                vulnerability, and aesthetics.
              </div>
              <br />
              <br />
              <div className="signature">Blue Brush</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={5}>
          <div>
            <div className="content-about">
              <div className="about-text">
                <br />
                Ever since I was a little kid, I've been drawing every chance I
                get. Then I already knew that I wanted to do something creative.
                After I got my degree in interior design and settled down, I
                went back to what I really loved: art. In 2015 I created my
                first blog to share my passion. Later, in 2015, I decided to
                offer services such as commissioned paintings and illustrations.
                <br />
                <br />
                I exhibit regularly at art markets and run my own social media.
                This has led to such wonderful projects as local exhibitions,
                personal commissions, and paintings for various public spaces.
                <br />
                <br /> In my online store you can buy original paintings and
                reproductions. My products are also available on Etsy, an online
                platform for designers.
                <br />
                <br /> Leave me a message if you have any questions or would
                like to work together.
              </div>

              <div className="button-view">
                <Button variant="secondary" href="/contact">
                  CONTACT ME
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={7}>
          <div className="about">
            <img className="image-about" src={italy} alt="Bilvard"></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
