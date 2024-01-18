// src/components/Hero.js

import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import heroImage from "../images/hero.png";

const HeroContainer = styled.div`
  position: relative;
  height: 75vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${heroImage}) center/cover;
  color: #f00;
  font-family: "Supply Mono", monospace;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  .hero-content {
    max-width: 800px;
    padding: 20px;
  }

  h1 {
    font-size: 3em;
    margin-bottom: 0.5em;
    // text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  .btn {
    display: inline-block;
    padding: 20px 40px;
    margin-top: 1em;
    text-decoration: none;
    font-size: 1.5em;
    color: #fff;
    background-color: #000;
    border-radius: 10px;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    -webkit-filter: invert(100%);
    filter: invert(100%);
    // font-weight: bold;
  }
`;

const Hero = ({ scaleOnHover }) => (
  <HeroContainer>
    <div className="hero-content">
      {/* <h1>Welcome!</h1> */}
      <AnchorLink to="/#recent-happenings" className="btn">
        Welcome!
      </AnchorLink>
    </div>
  </HeroContainer>
);

export default Hero;
