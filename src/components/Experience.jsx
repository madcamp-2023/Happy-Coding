import { Float, Line, OrbitControls, PerspectiveCamera, useScroll } from "@react-three/drei";
import { Airplane } from "./Airplane";
import { Cloud } from "./Cloud";
import * as THREE from "three"
import { useMemo, useRef } from "react";
import { useFrame } from "react-three-fiber";

const getRandomValue = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  
const generateRandomClouds = (count) => {
    const clouds = [];
    const colors = ["red", "orange", "yellow", "green", "blue", "purple", "grey"]
    for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(getRandomValue(0, colors.length))];
        const scale = [getRandomValue(1, 2), getRandomValue(1, 3), getRandomValue(0.5, 3)];
        const position = [getRandomValue(-100, 100), getRandomValue(-100, 100), getRandomValue(-100, 100)];
        const cloud = <Cloud key={i} color={color} scale={scale} position={position} />;
        clouds.push(cloud);
    }
    return clouds;
};

const LINE_NB_POINTS = 12000

export const Experience = () => {
    const randomClouds = generateRandomClouds(1000);

    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(0,0,0),
            new THREE.Vector3(0,0,-10),
            new THREE.Vector3(-10,0,-20),
            new THREE.Vector3(0,0,-30),
            new THREE.Vector3(0,10,-40),
            new THREE.Vector3(5,0,-50),
            new THREE.Vector3(6,-10,-60)
        ], false, "catmullrom", 0.5)
    }, [])

    const linePoints = useMemo(() => {
        return curve.getPoints(LINE_NB_POINTS)
    }, [curve])

    const shape = useMemo(() => {
        const shape = new THREE.Shape()
        shape.moveTo(0,-0.2)
        shape.lineTo(0,0.2)
        return shape
    }, [curve])

    const cameraGroup = useRef()
    const airplane = useRef()
    const scroll = useScroll()

    useFrame((_state, delta) => {
        const curPointIndex = Math.min(
            Math.round(scroll.offset * linePoints.length),
            linePoints.length-1
        )
        const curPoint = linePoints[curPointIndex]
        const pointAhead = linePoints[Math.min(curPointIndex + 1, linePoints.length-1)];

        const xDisplacement = (pointAhead.x - curPoint.x) * 80
        // MATH.PI / 2 -> LEFT, -MATH.PI / 2 -> RIGHT

        const angleRotation = (xDisplacement < 0 ? 1 : -1) * Math.min(Math.abs(xDisplacement), Math.PI / 3)
        const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(
                airplane.current.rotation.x,
                airplane.current.rotation.y,
                angleRotation,
            )
        )

        const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(
                cameraGroup.current.rotation.x,
                angleRotation,
                cameraGroup.current.rotation.z
            )
        )

        airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta*2)
        cameraGroup.current.quaternion.slerp(targetCameraQuaternion, delta*2)
        cameraGroup.current.position.lerp(curPoint, delta*24)
    })
    

    return (
        <>
        {/* <OrbitControls enableZoom = {false} /> */}
        <group ref={cameraGroup}>
        <PerspectiveCamera position = {[0,0,7]} fov={30} makeDefault/>
        <group ref={airplane}>
        <Float floatIntensity = {2} speed = {2}>
        <Airplane rotation-y={Math.PI / 2} scale={[0.2, 0.2, 0.2]} position-y={0.1}/>
        </Float>
        </group> 
        </group>
        {/* Line */}
        <group position-y={-1.5}>
        <Line
            points={linePoints}
            color={"white"}
            opacity={0.7}
            transparent
            lineWidth={10} />
        </group>

        {randomClouds}
        {/* <Cloud color = "red" opacity = {0.1} scale={[0.1, 0.1, 0.1]} position={[-2,-4,-1]}/> */}
        {/* <Cloud color = {"red"} scale = {[1,1,1]} position ={[-1,-1,-1]}/> */}
        {/* <Cloud color = "red" scale = {[1,1,1]} rotation-y = {Math.PI / 9} position = {[-2,3,-10]}/>
        <Cloud color = "blue" scale = {[1,1,1]} rotation-y = {Math.PI / 9} position = {[-2,-3,-3]}/>
        <Cloud color = "yellow" scale = {[1,1,1]} rotation-y = {Math.PI / 9} position = {[10, -5, -30]}/>
        <Cloud color = "purple" scale = {[1,1,1]} rotation-y = {Math.PI / 9} position = {[-20,0,-45]}/>
        <Cloud color = "green" scale = {[1,1,1]} rotation-y = {Math.PI / 9} position = {[-1,-1,-60]}/>
        <Cloud color = "pink" scale = {[2,2,2]} rotation-y = {Math.PI / 9} position = {[10,-1,-20]}/> */}

        </>
    )
}