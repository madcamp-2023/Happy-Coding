import React from "react";
import { Canvas } from "react-three-fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import { Experience } from "../components/Experience";

export default function Atmos() {
  return (
    <Canvas>
      <Environment background preset="dawn" blur={0.8} />
      <Experience />
    </Canvas>
  );
}
