import React, { useState, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ScrollControls,
  useScroll,
  Line,
  PerspectiveCamera,
} from "@react-three/drei";
import CodeColumn from "../components/CodeColumn";
import { NoteHigh, Note4, Note8 } from "../models/MusicalNote";
import * as THREE from "three";
import SideNavigation from "../components/SideNavigation";
import styles from "./CodeFloat.module.css";

function Scene() {
  const [code, setCode] = useState(null);
  const [totalLength, setTotalLength] = useState(0);
  const cameraRef = useRef();
  const scroll = useScroll();

  // fetch code from localStorage
  useEffect(() => {
    const storedCode = localStorage.getItem("code");
    if (storedCode) {
      setCode(storedCode);
      setTotalLength(storedCode.split("\n").length);
    }
  }, []);

  useEffect(() => {
    const newCurve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 100),
        new THREE.Vector3(totalLength, 5, 100),
        new THREE.Vector3(totalLength * 1.5, -5, 100),
        new THREE.Vector3(totalLength * 2, 0, 100),
      ],
      false,
      "catmullrom",
      0.5
    );
    setCurve(newCurve);
  }, [totalLength]);

  const [curve, setCurve] = useState(
    new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 100),
        new THREE.Vector3(totalLength, 5, 100),
        new THREE.Vector3(totalLength * 1.5, -5, 100),
        new THREE.Vector3(totalLength * 2, 0, 100),
      ],
      false,
      "catmullrom",
      0.5
    )
  );

  const linePoints = useMemo(() => {
    return curve.getPoints(2000);
  }, [curve]);

  useFrame((state, delta) => {
    const curPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    );
    const curPoint = linePoints[curPointIndex];
    cameraRef.current.position.lerp(curPoint, delta * 24);
  });

  return (
    <group>
      <PerspectiveCamera
        position={[0, 0, 100]}
        near={0.1}
        far={1000}
        aspect={window.innerWidth / window.innerHeight}
        makeDefault
        ref={cameraRef}
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
        <SideNavigation before={"/codeball"} next={"/codeatmos"} />
      </div>
      <Canvas camera={{ position: [0, 0, 100], near: 0.1, far: 1000 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Environment background preset="dawn" blur={0.8} />
        <ScrollControls pages={6} damping={0.3}>
          <Scene />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
