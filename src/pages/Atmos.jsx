import React from "react";
import { Canvas } from "react-three-fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import { Experience } from "../components/Experience";
import SideNavigation from "../components/SideNavigation";
import styles from "./Atmos.module.css";

export default function Atmos() {
  return (
    <>
      <div className={styles.SideNavigationOverlay}>
        <SideNavigation
          before={"/codefloat"}
          next={"/codeball"}
          curMode="free"
        />
      </div>
      <Canvas>
        <Environment background preset="dawn" blur={0.8} />
        <Experience />
      </Canvas>
    </>
  );
}
