import React from "react";
import { Canvas } from "react-three-fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import { Experience } from "../components/Experience";

export default function Atmos() {
    return (
        <>
        <Canvas 
        // camera={{position: [0,0,5], fov:30,}}
        >
            {/* <color attach="background" args={["ececec"]} /> */}
            <Environment background preset = "dawn" blur={0.8} /> 
            <ScrollControls pages={5} damping = {0.3}>
            <Experience />
            </ScrollControls>
        </Canvas>
        </>
    )

}
