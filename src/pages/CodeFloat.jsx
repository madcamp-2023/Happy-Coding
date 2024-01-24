import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import CodeColumn from "../components/CodeColumn";
import { NoteHigh, Note4, Note8 } from "../models/MusicalNote";

export default function CodeFloat({ code }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{
          position: [5, 1, 1],
          near: 0.1,
          far: 1000,
          aspect: window.innerWidth / window.innerHeight,
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <CodeColumn code={code} />
        <Environment background preset = "dawn" blur={0.8} />
        <NoteHigh position={[150, 80, -80]} rotation={[0, 1, 0]} />
        <NoteHigh position={[-100, -300, -800]} rotation={[0, 0, 1]} />
        <NoteHigh position={[-400, 100, 400]} rotation={[0, 0, 1]} />
        <Note4 position={[-50, -50, 0]} rotation={[0.1, 0.4, 0]} />
        <Note4 position={[0, 300, 400]} rotation={[-0.1, 0, 0]} />
        <Note4 position={[300, -200, 400]} rotation={[-0.1, 0, 0]} />
        <Note8 position={[100, -50, 300]} rotation={[0, -1, 0]} />
        <Note8 position={[200, 100, -600]} rotation={[0, 1, -1]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
