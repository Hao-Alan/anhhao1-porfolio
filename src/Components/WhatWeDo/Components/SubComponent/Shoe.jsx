/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 shoe.gltf --transform
Author: François Le Normand (https://sketchfab.com/FrancoisLN)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/minish-shoe-house-32457001a7f344daa77b1a7e1b8826ec
Title: Minish shoe house
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Shoe(props) {
  const { nodes, materials } = useGLTF("/shoe-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Checker} />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Champigons}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.material}
        />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Trefle} />
      </group>
    </group>
  );
}

useGLTF.preload("/shoe-transformed.glb");
