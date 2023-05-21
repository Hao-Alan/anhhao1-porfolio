/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 chair.gltf --transform
Author: SilkevdSmissen (https://sketchfab.com/SilkevdSmissen)
License: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
Source: https://sketchfab.com/3d-models/the-wizards-chair-9aea3b516d3e4e169710049b32282670
Title: The Wizard's Chair
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Chair(props) {
  const { nodes, materials } = useGLTF("/chair-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.chair_chair_0.geometry}
        material={materials.chair}
      />
      <mesh
        geometry={nodes.chair_chair_0_1.geometry}
        material={materials.chair}
      />
      <mesh
        geometry={nodes.chair_chair_0_2.geometry}
        material={materials.chair}
      />
      <mesh
        geometry={nodes.chair_chair_0_3.geometry}
        material={materials.chair}
      />
      <mesh
        geometry={nodes.chair_chair_0_4.geometry}
        material={materials.chair}
      />
      <mesh
        geometry={nodes.chair_chair_0_5.geometry}
        material={materials.chair}
      />
      <mesh
        geometry={nodes.chair_chair_0_6.geometry}
        material={materials.chair}
      />
      <mesh
        geometry={nodes.flames_flames_0.geometry}
        material={materials.flames}
      />
      <mesh
        geometry={nodes.candles_candles_0.geometry}
        material={materials.candles}
      />
      <mesh
        geometry={nodes.corks_corks_0.geometry}
        material={materials.chair}
      />
      <mesh
        geometry={nodes.bottles_bottles_0.geometry}
        material={materials.bottles}
      />
      <mesh
        geometry={nodes.carpet_carpet_0.geometry}
        material={materials.carpet}
      />
      <mesh
        geometry={nodes.smoke_smoke_0.geometry}
        material={materials.smoke}
      />
      <mesh
        geometry={nodes.stone_stone_0.geometry}
        material={materials.stone}
      />
      <mesh
        geometry={nodes.cigar_cigar_0.geometry}
        material={materials.chair}
      />
      <mesh
        geometry={nodes.bookcovers_bookcovers_0.geometry}
        material={materials.chair}
      />
      <mesh
        geometry={nodes.paper_paper_0.geometry}
        material={materials.candles}
      />
      <mesh
        geometry={nodes.stitches_stitches_0.geometry}
        material={materials.chair}
      />
      <mesh geometry={nodes.foam_foam_0.geometry} material={materials.foam} />
      <mesh
        geometry={nodes.buttons_buttons_0.geometry}
        material={materials.buttons}
      />
      <mesh
        geometry={nodes.ornaments_ornaments_0.geometry}
        material={materials.chair}
      />
      <mesh
        geometry={nodes.patch_patch_0.geometry}
        material={materials.chair}
      />
      <mesh
        geometry={nodes.ashtray_ashtray_0.geometry}
        material={materials.ashtray}
      />
      <mesh
        geometry={nodes.buttonspillows_buttonspillows_0.geometry}
        material={materials.chair}
      />
      <mesh
        geometry={nodes.pillows_pillows_0.geometry}
        material={materials.chair}
      />
      <mesh
        geometry={nodes.wood_wood_0.geometry}
        material={materials.candles}
      />
    </group>
  );
}

useGLTF.preload("/chair-transformed.glb");