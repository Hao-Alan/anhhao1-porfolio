import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Ipad } from "./SubComponent/Ipad";
import { styled } from "styled-components";

const Content = styled.div`
  width: 230px;
  padding: 10px;
  height: 40px;
  border-radius: 10px;
  background-color: #b2d787;
  color: white;
  position: absolute;
  bottom: 50px;
  right: 50px;

  @media screen and (max-width: 768px) {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }
`;

const Illustration = () => {
  return (
    <>
      <Canvas>
        <Stage>
          <Ipad />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Content>
    </>
  );
};

export default Illustration;
