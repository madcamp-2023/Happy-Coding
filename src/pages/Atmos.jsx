import React from "react";
import { Canvas } from "react-three-fiber";
import { Environment } from "@react-three/drei";
import { Experience } from "../components/Experience";

export default function Atmos() {
    return (
        <>
        <Canvas>
            {/* <color attach="background" args={["ececec"]} /> */}
            <Environment background preset = "dawn" blur={0.8} /> 
            <Experience />
        </Canvas>
        </>
    )

}
