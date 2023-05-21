import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Laptop } from "./SubComponent/Laptop";

const ProductDesign = () => {
  return (
    <Canvas>
      <Stage>
        <Laptop />
        <OrbitControls autoRotate enableZoom={false} />
      </Stage>
    </Canvas>
  );
};

export default ProductDesign;
