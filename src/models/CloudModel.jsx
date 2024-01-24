/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/_cloud.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CloudModel({ color, position, scale }) {
  const { nodes, materials } = useGLTF("/assets/_cloud.glb");
  const cloudMaterial = materials.lambert2SG.clone();

  if (color) {
    cloudMaterial.color.set(color);
  }

  materials.lambert2SG.transparent = true;
  materials.lambert2SG.opacity = 0.5;

  return (
    <group position={position} scale={[scale, scale, scale]} dispose={null}>
      <mesh geometry={nodes.Node.geometry} material={cloudMaterial} />
    </group>
  );
}

useGLTF.preload("/assets/_cloud.glb");
