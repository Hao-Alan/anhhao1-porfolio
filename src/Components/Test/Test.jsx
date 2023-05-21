import React from "react";
import { styled } from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "../Cube";

const Test = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={2} />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Cube />
    </Canvas>
  );
};

export default Test;
