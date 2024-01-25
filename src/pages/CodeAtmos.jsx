import React from "react";
import { Canvas } from "react-three-fiber";
import { Environment, ScrollControls, OrbitControls } from "@react-three/drei";
import AtmosScene from "../components/AtmosScene";
import styles from "./CodeAtmos.module.css";
import SideNavigation from "../components/SideNavigation";

export default function CodeAtmos() {
  return (
    <div>
      <div className={styles.SideNavigationOverlay}>
        <SideNavigation
          before={"/codefloat"}
          next={"/codeball"}
          curMode="path"
        />
      </div>
      <Canvas>
        <Environment background preset="dawn" blur={0.8} />
        <ScrollControls pages={6} damping={0.3}>
          <AtmosScene />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
