import React, { useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Line } from "@react-three/drei";
import CodeColumn from "../components/CodeColumn";
import { NoteHigh, Note4, Note8 } from "../models/MusicalNote";
import * as THREE from "three";
import SideNavigation from "../components/SideNavigation";
import styles from "./CodeFloat.module.css";

function Scene() {
  const [code, setCode] = useState(null);
  const cameraPosition = new THREE.Vector3(0, 0, 50);
  const scroll =
    -window.scrollY / (document.body.scrollHeight - window.innerHeight);

  // fetch code from localStorage
  useEffect(() => {
    const storedCode = localStorage.getItem("code");
    if (storedCode) {
      setCode(storedCode);
    }
  }, []);

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [new THREE.Vector3(0, 0, 50), new THREE.Vector3(1000, 0, 50)],
      false,
      "catmullrom",
      0.5
    );
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(4000);
  }, [curve]);

  useFrame((_state, delta) => {
    const curPointIndex = Math.min(
      Math.round(scroll * (linePoints.length - 1)),
      linePoints.length - 1
    );
    const curPoint = linePoints[curPointIndex];
    cameraPosition.lerp(curPoint, delta * 24);
  });

  return (
    <group>
      <perspectiveCamera
        position={cameraPosition}
        near={0.1}
        far={1000}
        aspect={window.innerWidth / window.innerHeight}
      />
      <CodeColumn code={code} />
      <NoteHigh position={[150, 80, -80]} rotation={[0, 1, 0]} />
      <NoteHigh position={[-100, -300, -800]} rotation={[0, 0, 1]} />
      <NoteHigh position={[-400, 100, 400]} rotation={[0, 0, 1]} />
      <Note4 position={[-50, -50, 0]} rotation={[0.1, 0.4, 0]} />
      <Note4 position={[0, 300, 400]} rotation={[-0.1, 0, 0]} />
      <Note4 position={[300, -200, 400]} rotation={[-0.1, 0, 0]} />
      <Note8 position={[100, -50, 300]} rotation={[0, -1, 0]} />
      <Note8 position={[200, 100, -600]} rotation={[0, 1, -1]} />
      <Line
        points={linePoints}
        color={"white"}
        opacity={0.7}
        transparent
        lineWidth={10}
      />
    </group>
  );
}

export default function CodeFloat() {
  return (
    <div className={styles.CodeFloat}>
      <div className={styles.SideNavigationOverlay}>
        <SideNavigation before={"/codetree"} next={"/codeball"} />
      </div>
      <Canvas camera={{ position: [0, 0, 50], near: 0.1, far: 1000 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Environment background preset="dawn" blur={0.8} />
        <OrbitControls enableZoom={false} />
        <Scene />
      </Canvas>
    </div>
  );
}
