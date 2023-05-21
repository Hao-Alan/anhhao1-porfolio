import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Shoe } from "./SubComponent/Shoe";

const SocialMedia = () => {
  return (
    <Canvas>
      <Stage>
        <Shoe />
      </Stage>
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  );
};

export default SocialMedia;
