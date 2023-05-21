import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import ShoeBeauty from "./SubComponent/ShoeBeauty";
import { styled } from "styled-components";

const Container = styled.div`
  width: 230px;
  padding: 20px;
  height: 80px;
  border-radius: 10px;
  background-color: #b2d787;
  color: white;
  position: absolute;
  top: 100px;
  right: 50px;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }
`;
const Development = () => {
  return (
    <>
      <Canvas>
        <Stage>
          <ShoeBeauty />
        </Stage>
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>
      <Container>
        Hello everyone this is one of the most advanced, high technology for the
        development of the current world, please joining us for this great
        invention
      </Container>
    </>
  );
};

export default Development;
