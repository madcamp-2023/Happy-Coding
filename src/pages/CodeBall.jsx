import React, { useState, useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Physics, usePlane, useSphere } from "@react-three/cannon";
import { Environment, OrbitControls } from "@react-three/drei";
import SideNavigation from "../components/SideNavigation";
import styles from "./CodeFloat.module.css";
import Balls from "../components/Balls";
import BallBasket from "../components/BallBasket";

function Scene() {
  return (
    <group position={[0, 0, 0]}>
      <Balls />
      <BallBasket />
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
        <pointLight position={[100, 100, 100]} intensity={100} castShadow />
        <Environment background preset="park" blur={0.8} />
        <Physics>
          <Scene />
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
