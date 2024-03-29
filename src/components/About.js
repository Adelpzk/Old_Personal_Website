import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Adel from "../images/adelPazokicoloured.jpg";
import Linkedin from "../images/linkedin.png";
import Instagram from "../images/Instagram.png";
import Resume from "../images/Resume.png";
import Github from "../images/github.png";
import Typewriter from "typewriter-effect";
import "../styles/Home.css";

function About() {
  return (
    <div className="div-intro" id="about">
      <Row className="intro">
        <Col xs={8} md={4}>
          <Image src={Adel} className="image-adel" />
        </Col>
        <Col xs={12} md={8}>
          <div className="header"></div>
          <div className="header-name">
            {" "}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello! I am")
                  .callFunction(() => {})
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Adel Pazoki Toroudi")
                  .start();
              }}
            />
          </div>
          <div className="subtext">
            <strong>
              I'm a third year Management Engineering student at the University
              of Waterloo. This summer I will be joining Geotab as a Software
              Engineer and for my past Internships I worked as a Software
              Developer - Systems Engineer at Toyota Motors Manufacturing
              Canada, as a Software Developer at Shinydocs and as a Software
              Solutions Architect at Thomson Reuters. I have a passion for
              Software Development, Product &amp; Project Management. I am
              always looking for new opputunities to expand my skills so feel
              free to reach out.
            </strong>

            <Row className="row-icons">
              <Col>
                <a
                  href="https://www.linkedin.com/in/adel-pazoki-toroudi"
                  target="_blank"
                >
                  <Image className="icon contact-icon" src={Linkedin}></Image>
                </a>
              </Col>
              <Col>
                <a href="https://github.com/Adelpzk" target="_blank">
                  <Image className="icon contact-icon" src={Github}></Image>
                </a>
              </Col>
              <Col>
                <a
                  href="https://drive.google.com/file/d/1EYFgwR3lq4494TmlyQe6k5v_P1NBoxoX/view?usp=sharing"
                  target="_blank"
                >
                  <Image className="icon contact-icon" src={Resume}></Image>
                </a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About;
