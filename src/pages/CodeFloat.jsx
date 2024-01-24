import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Html, OrbitControls } from "@react-three/drei";
import CodeColumn from "../components/CodeColumn";
import { NoteHigh, Note4, Note8 } from "../models/MusicalNote";
import * as THREE from "three";
import SideNavigation from "../components/SideNavigation";
import styles from "./CodeFloat.module.css";

function Scene({ code }) {
  const [initialCameraPosition, setInitialCameraPosition] = useState([
    0, 0, 20,
  ]);
  const keyMap = useRef({});
  useEffect(() => {
    const handleKeyDown = (event) => {
      keyMap.current[event.code] = true;
    };

    const handleKeyUp = (event) => {
      keyMap.current[event.code] = false;
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(({ camera }, delta) => {
    const movementSpeed = 50;
    const moveForward = new THREE.Vector3(1, 0, 0);

    if (keyMap.current["ArrowDown"]) {
      camera.position.x -= moveForward.x * movementSpeed * delta;
    }
    if (keyMap.current["ArrowUp"]) {
      camera.position.x += moveForward.x * movementSpeed * delta;
    }
  });

  return (
    <group>
      <CodeColumn code={code} />
      <NoteHigh position={[150, 80, -80]} rotation={[0, 1, 0]} />
      <NoteHigh position={[-100, -300, -800]} rotation={[0, 0, 1]} />
      <NoteHigh position={[-400, 100, 400]} rotation={[0, 0, 1]} />
      <Note4 position={[-50, -50, 0]} rotation={[0.1, 0.4, 0]} />
      <Note4 position={[0, 300, 400]} rotation={[-0.1, 0, 0]} />
      <Note4 position={[300, -200, 400]} rotation={[-0.1, 0, 0]} />
      <Note8 position={[100, -50, 300]} rotation={[0, -1, 0]} />
      <Note8 position={[200, 100, -600]} rotation={[0, 1, -1]} />
      <perspectiveCamera
        position={initialCameraPosition}
        near={0.1}
        far={1000}
        aspect={window.innerWidth / window.innerHeight}
      />
    </group>
  );
}

export default function CodeFloat() {
  const [code, setCode] = useState(null);

  useEffect(() => {
    // Fetch code from localStorage
    const storedCode = localStorage.getItem("code");

    // Set the code in state when available
    if (storedCode) {
      setCode(storedCode);
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount

  if (code === null) {
    // If code is not available yet, you might want to render a loading state
    return;
  }

  return (
    <div className={styles.CodeFloat}>
      <div className={styles.SideNavigationOverlay}>
        <SideNavigation before={"/codetree"} next={"/codeball"} />
      </div>
      <Canvas
        camera={{
          position: [0, 0, 50],
          near: 0.1,
          far: 1000,
          aspect: window.innerWidth / window.innerHeight,
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <CodeColumn code={code} />
        <Environment background preset="dawn" blur={0.8} />
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
