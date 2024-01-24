import React from "react";
import {Canvas, useThree, useFrame} from 'react-three-fiber';
import { Environment, OrbitControls } from "@react-three/drei";
import Trees from '../components/tree';
import Camera from "../components/Camera";
import { Ground } from "../components/tree";
// import { Mountain } from "../components/tree";

export default function CodeTree() {
    const cameraPosition = [0,10,10]
    return (
        <div style={{height: '150vh'}}>
            <Canvas>
                <ambientLight intensity={0.1} />
                <pointLight position={[10,10,10,]} />
                <Environment background preset = "dawn" blur={0.8} /> 
                {/* <color attach = "background" args = {['skyblue']} /> */}
                <OrbitControls />
                <Ground />
                {/* <Mountain /> */}
                <Trees />
                {/* <Camera /> */}
            </Canvas>
        </div>
    );

}
