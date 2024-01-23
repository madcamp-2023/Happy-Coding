import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, usePlane } from "@react-three/cannon";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import SideNavigation from "../components/SideNavigation";
import styles from "./CodeFloat.module.css";
import Balls from "../components/Balls";

function Floor(props) {
  const [ref] = usePlane(() => ({ mass: 0, ...props }), useRef());

  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial />
    </mesh>
  );
}

function Scene() {
  return (
    <group>
      <Balls />
      <Floor rotation={[-Math.PI / 2, 0, 0]} />
      <perspectiveCamera
        position={[20, 20, 20]}
        near={0.1}
        far={1000}
        aspect={window.innerWidth / window.innerHeight}
      />
    </group>
  );
}

export default function CodeBall({ code }) {
  return (
    <div className={styles.CodeFloat}>
      <div className={styles.SideNavigationOverlay}>
        <SideNavigation before={"/codetree"} next={"/codedomino"} />
      </div>
      <Canvas
        camera={{
          position: [0, 0, 50],
          near: 0.1,
          far: 1000,
          aspect: window.innerWidth / window.innerHeight,
        }}
        shadowMap
      >
        <ambientLight />
        <pointLight position={[100, 100, 100]} intensity={100} castShadow />
        <Environment background preset="park" blur={0.8} />
        <Physics gravity={[0, -50, 0]}>
          <Scene />
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
