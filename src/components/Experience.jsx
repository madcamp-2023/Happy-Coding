import { Float, Line, OrbitControls, PerspectiveCamera, useScroll } from "@react-three/drei";
import { Airplane } from "./Airplane";
import { Cloud } from "./Cloud";
import { Cloud02 } from "./Cloud02";
import { Airplane02 } from "./Airplane02";
import * as THREE from "three"
import { useMemo, useRef } from "react";
import { useFrame } from "react-three-fiber";

const getRandomValue = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  
const generateRandomClouds = (count) => {
    const clouds = [];
    const colors = ["red", "orange", "yellow", "green", "blue", "purple", "white"]
    for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(getRandomValue(0, colors.length))];
        const scale = [getRandomValue(0.5, 2), getRandomValue(1, 3), getRandomValue(0.5, 3)];
        const position = [getRandomValue(-100, 100), getRandomValue(-100, 100), getRandomValue(-100, 100)];
        const cloud = <Cloud key={i} color={color} scale={scale} position={position} />;
        clouds.push(cloud);
    }
    return clouds;
};

const LINE_NB_POINTS = 2000

export const Experience = () => {

    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(0,0,0),
            new THREE.Vector3(0,0,-10),
            new THREE.Vector3(-4,0,-20),
            new THREE.Vector3(-3,0,-30),
            new THREE.Vector3(0,0,-40),
            new THREE.Vector3(5,0,-50),
            new THREE.Vector3(6,0,-60),
            new THREE.Vector3(5,0,-70),
            new THREE.Vector3(0,0,-80),
            new THREE.Vector3(0,0,-90),
            new THREE.Vector3(0,0,-100)
        ], false, "catmullrom", 0.5)
    }, [])

    const linePoints = useMemo(() => {
        return curve.getPoints(LINE_NB_POINTS)
    }, [curve])

    const shape = useMemo(() => {
        const shape = new THREE.Shape()
        shape.moveTo(0,-0.2)
        shape.moveTo(0,0.2)
        return shape
    }, [curve])

    const randomClouds = generateRandomClouds(1000);

    const cameraGroup = useRef()
    const scroll = useScroll()

    useFrame((_state, delta) => {
        const curPointIndex = Math.min(
            Math.round(scroll.offset * linePoints.length),
            linePoints.length-1
        )
        const curPoint = linePoints[curPointIndex]
        cameraGroup.current.position.lerp(curPoint, delta*24)
    })

    return (
        <>
        {/* <OrbitControls enableZoom = {false} /> */}
        <group ref={cameraGroup}>
        <PerspectiveCamera position = {[0,0,7]} fov={30} makeDefault/>
        
        <Float floatIntensity = {2} speed = {2}>
        <Airplane02 rotation-y={Math.PI / 2} scale={[0.2, 0.2, 0.2]} position-y={0.1}/>
        </Float>
        </group>
        {/* Line */}
        <group position-y={-2}>
        <Line
            points={linePoints}
            color={"white"}
            opacity={0.7}
            transparent
            lineWidth={10} />
        {/* <mesh>
            <extrudeGeometry
            args={[
                shape,
                {
                    steps: LINE_NB_POINTS,
                    bevelEnable: false,
                    extrudePath: curve,
                }
            ]} />
            <meshStandardMaterial color={"white"} opacity={0.7} transparent />
        </mesh> */}
        </group>

        {/* {randomClouds} */}
        {/* <Cloud02 /> */}
        {/* <Cloud color = "red" opacity = {0.1} scale={[0.1, 0.1, 0.1]} position={[-2,-4,-1]}/> */}
        {/* <Cloud color = {"red"} scale = {[1,1,1]} position ={[-1,-1,-1]}/> */}
        <Cloud color = "red" scale = {[1,1,1]} rotation-y = {Math.PI / 9} position = {[-2,3,-10]}/>
        <Cloud color = "blue" scale = {[1,1,1]} rotation-y = {Math.PI / 9} position = {[-2,-3,-3]}/>
        <Cloud color = "yellow" scale = {[1,1,1]} rotation-y = {Math.PI / 9} position = {[10, -5, -30]}/>
        <Cloud color = "purple" scale = {[1,1,1]} rotation-y = {Math.PI / 9} position = {[-20,0,-45]}/>
        <Cloud color = "green" scale = {[1,1,1]} rotation-y = {Math.PI / 9} position = {[-1,-1,-60]}/>
        <Cloud color = "pink" scale = {[2,2,2]} rotation-y = {Math.PI / 9} position = {[10,-1,-20]}/>

        </>
    )
}