import React from "react";
import { Contact, ThinkMakeSolve, ThinkOutSide, WhatWeDo } from "./Components";
import { styled } from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background-image: url("/image/bg.jpeg");
`;

const Container = styled.div`
  /* width: 70%; */
  margin: 0 auto;
`;

const App = () => {
  return (
    <Section>
      <Container>
        <ThinkMakeSolve />
        <ThinkOutSide />
        <WhatWeDo />
        <Contact />
      </Container>
    </Section>
  );
};

export default App;
