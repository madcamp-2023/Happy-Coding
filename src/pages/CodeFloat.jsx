import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import CodeColumn from "../components/CodeColumn";

export default function CodeFloat({ code }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [5, 1, 1] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <CodeColumn code={code} />
        <Environment background preset="dawn" blur={0.8} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
