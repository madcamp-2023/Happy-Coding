import React, { useState, useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Physics, usePlane, useSphere } from "@react-three/cannon";
import { Environment, OrbitControls } from "@react-three/drei";
import SideNavigation from "../components/SideNavigation";
import styles from "./CodeFloat.module.css";
import Balls from "../components/Balls";

function Basket() {
  // Define the positions, rotations, and sizes of the planes
  const planeProps = [
    { position: [0, 0, 0], rotation: [-Math.PI / 2, 0, 0], size: [500, 500] }, // Bottom
    // {
    //   position: [0, 500, 0],
    //   rotation: [-Math.PI / 2, 0, 0],
    //   size: [500, 500],
    // }, // Top
    {
      position: [-250, 250, 0],
      rotation: [0, Math.PI / 2, 0],
      size: [500, 500],
    }, // Left
    {
      position: [250, 250, 0],
      rotation: [0, -Math.PI / 2, 0],
      size: [500, 500],
    }, // Right
    { position: [0, 250, -250], rotation: [0, 0, 0], size: [500, 500] }, // Front
    { position: [0, 250, 250], rotation: [0, Math.PI, 0], size: [500, 500] }, // Back
  ];

  return (
    <>
      {planeProps.map((props, index) => (
        <Plane key={index} {...props} />
      ))}
    </>
  );
}

function Plane({ position, rotation, size }) {
  // Use usePlane to create a physics plane
  const [ref] = usePlane(() => ({ type: "Static", position, rotation }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={size} />
      <meshStandardMaterial color="brown" />
    </mesh>
  );
}

function Mouse() {
  const { viewport } = useThree();
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [6] }));
  return useFrame((state) => {
    api.position.set(state.mouse.x, state.mouse.y, 0);
  });
}

function Scene() {
  return (
    <group position={[0, 0, -10]}>
      <Balls />
      <Basket />
      {/* <Mouse /> */}
      <perspectiveCamera
        position={[0, 20, 50]}
        near={0.1}
        far={5000}
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
        <Physics gravity={[0, -100, 0]}>
          <Scene />
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
