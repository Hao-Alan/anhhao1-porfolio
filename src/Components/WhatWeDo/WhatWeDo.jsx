import React, { useState } from "react";
import styled from "styled-components";
import WebDesign from "./Components/WebDesign";
import SocialMedia from "./Components/SocialMedia";
import ProductDesign from "./Components/ProductDesign";
import Illustration from "./Components/Illustration";
import Development from "./Components/Development";

const Data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  width: 80%;
  margin: 0 auto;
  position: relative;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    overflow: visible;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const ListItem = styled.li`
  font-size: 90px;
  /* padding: 10px; */
  -webkit-text-stroke: 1px #fff;
  position: relative;

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    &::after {
      color: pink;
      animation: whatAnimate 0.5s linear both;

      @keyframes whatAnimate {
        to {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    -webkit-text-stroke: 0px;
    font-size: 40px;
    color: white;
  }
`;

const Right = styled.div`
  flex: 1;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhatWeDo = () => {
  const [content, setContent] = useState("Web Design");
  return (
    <Container>
      <Left>
        <List>
          {Data.map((item) => (
            <ListItem key={item} text={item} onClick={() => setContent(item)}>
              {item}
            </ListItem>
          ))}
        </List>
      </Left>

      <Right>
        {content === "Web Design" ? (
          <WebDesign />
        ) : content === "Development" ? (
          <Development />
        ) : content === "Illustration" ? (
          <Illustration />
        ) : content === "Product Design" ? (
          <ProductDesign />
        ) : (
          <SocialMedia />
        )}
      </Right>
    </Container>
  );
};

export default WhatWeDo;
