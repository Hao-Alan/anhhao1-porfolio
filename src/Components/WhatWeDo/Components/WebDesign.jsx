import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import { Chair } from "./SubComponent/Chair";

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100vh;
// `;

const Content = styled.div`
  width: 230px;
  height: 80px;
  padding: 20px;
  border-radius: 10px;
  background-color: #b2d787;
  color: white;
  position: absolute;
  bottom: 50px;
  right: 50px;
  margin: auto;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment={"city"} intensity={0.5}>
          <Chair />
        </Stage>
        <OrbitControls autoRotate={true} enableZoom={false} />
      </Canvas>
      <Content>
        Hello everyone this is one of the most advanced, high technology for the
        development of the current world, please joining us for this great
        invention
      </Content>
    </>
  );
};

export default WebDesign;
