import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Physics, usePlane, useSphere } from "@react-three/cannon";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import SideNavigation from "../components/SideNavigation";
import styles from "./CodeFloat.module.css";
import Balls from "../components/Balls";
// import Borders from "../components/Borders";
/*
function Floor(props) {
  const [ref] = usePlane(() => ({ mass: 0, ...props }), useRef());

  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial />
    </mesh>
  );
}
*/

function Borders() {
  const { viewport } = useThree();
  return (
    <>
      <Plane
        material-color="white" // Set material-color to "white"
        position={[0, -viewport.height / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Plane
        material-color="white" // Set material-color to "white"
        position={[-viewport.width / 2 - 1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Plane
        material-color="white" // Set material-color to "white"
        position={[viewport.width / 2 + 1, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Plane
        material-color="white" // Set material-color to "white"
        position={[0, 0, -1]}
        rotation={[0, 0, 0]}
      />
      <Plane
        material-color="white" // Set material-color to "white"
        position={[0, 0, 12]}
        rotation={[0, -Math.PI, 0]}
      />
    </>
  );
}

function Mouse() {
  const { viewport } = useThree();
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [6] }));
  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      7
    )
  );
}

function Plane({ color, ...props }) {
  usePlane(() => ({ ...props }));
  return null;
}

function Scene() {
  return (
    <group position={[0, 0, -10]}>
      <Balls />
      {/* <Floor rotation={[-Math.PI / 2, 0, 0]} /> */}
      <Mouse />
      <Borders />
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
        <SideNavigation before={"/codefloat"} next={"/codetree"} />
      </div>
      <Canvas
        shadows
        gl={{ stencil: false, antialias: false }}
        camera={{ position: [200, 100, 100], fov: 50, near: 0.1, far: 1000 }}
      >
        <ambientLight />
        <pointLight position={[100, 100, 100]} intensity={100} castShadow />
        <Environment background preset="park" blur={0.8} />
        <Physics
          gravity={[0, -50, 0]}
          defaultContactMaterial={{ restitution: 0.5 }}
        >
          <Scene />
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
