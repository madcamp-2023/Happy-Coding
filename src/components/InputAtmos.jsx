import React from "react";
import { Canvas } from "react-three-fiber";
import { Environment } from "@react-three/drei";
import InputAtmosScene from "./InputAtmosScene";

export default function InputAtmos() {
  return (
    <Canvas>
      <Environment background preset="dawn" blur={0.8} />
      <InputAtmosScene />
    </Canvas>
  );
}
