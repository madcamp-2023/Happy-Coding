import React from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
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
      {/* <perspectiveCamera
        makeDefault
        position={[0, 250, 0]}
        near={0.1}
        far={5000}
        aspect={window.innerWidth / window.innerHeight}
      /> */}
    </group>
  );
}

export default function CodeBall() {
  return (
    <div className={styles.CodeFloat}>
      <div className={styles.SideNavigationOverlay}>
        <SideNavigation
          before={"/codeatmos"}
          next={"/codefloat"}
          color="#043927"
        />
      </div>
      <Canvas
        shadows
        gl={{ stencil: false, antialias: false }}
        camera={{
          position: [250, 200, 250],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
      >
        <pointLight position={[100, 100, 100]} intensity={100} castShadow />
        <Environment background preset="park" blur={0.1} />
        <Physics>
          <Scene />
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
