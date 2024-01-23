/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: LTPman (https://sketchfab.com/LTPman)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/triangle-b7386fe62a554a39b12212c4992975bf
Title: Triangle
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Triangle({ rotation }) {
  const { nodes, materials } = useGLTF("/assets/triangle/scene.gltf");
  return (
    <mesh
      geometry={nodes.Torus__0.geometry}
      material={materials["Scene_-_Root"]}
      rotation={rotation}
      scale={0.5}
    />
  );
}

useGLTF.preload("/assets/triangle/scene.gltf");