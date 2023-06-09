/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 shoeBeauty.gltf --transform
Author: Terrie (https://sketchfab.com/terrielsimmons)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/asics-shoe-fa6b5937408441f7aa17d652998d1ae7
Title: Asics Shoe
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function ShoeBeauty(props) {
  const { nodes, materials } = useGLTF("/shoeBeauty-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -1.62]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.material_1}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.material_2}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/shoeBeauty-transformed.glb");
