import { Center, Float, Line, OrbitControls, PerspectiveCamera, Text, Text3D, useScroll } from "@react-three/drei";
import { Airplane } from "./Airplane";
import { Cloud } from "./Cloud";
import * as THREE from "three"
import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";

const getRandomValue = (min, max) => {
    return Math.random() * (max - min) + min;
  };

const generateRandomClouds = (count) => {
    const clouds = [];
    const colors = ["red", "orange", "yellow", "green", "blue", "purple", "grey"]
    const usedPositions = []

    const isPositionAvailable = (position) =>{
        for(const usedPosition of usedPositions){
            const distance = Math.sqrt(
                Math.pow(position[0] - usedPosition[0], 2) +
                Math.pow(position[1] - usedPosition[1], 2) +
                Math.pow(position[2] - usedPosition[2], 2)
            )

            if (distance < 500){
                return false
            }
        }
        return true
    }

    for (let i = 0; i < count; i++) {
        let color, scale, position, cloud
        do{
            color = colors[Math.floor(getRandomValue(0, colors.length))];
            scale = [getRandomValue(1, 2), getRandomValue(1, 3), getRandomValue(1, 3)];
            position = [getRandomValue(-100, 100), getRandomValue(-100, 100), getRandomValue(-100, 100)];
            
        } while (!isPositionAvailable(position))
        cloud = <Cloud key={i} color={color} scale={scale} position={position} />;
        clouds.push(cloud);
    }
    return clouds;
};

const LINE_NB_POINTS = 12000

export const Experience = () => {

    const randomClouds = generateRandomClouds(1000);

    // const curve = useMemo(() => {
    //     return new THREE.CatmullRomCurve3([
    //         new THREE.Vector3(0,0,0),
    //         new THREE.Vector3(0,0,-10),
    //         new THREE.Vector3(-10,0,-20),
    //         new THREE.Vector3(0,0,-30),
    //         new THREE.Vector3(0,10,-40),
    //         new THREE.Vector3(5,0,-50),
    //         new THREE.Vector3(6,-10,-60)
    //     ], false, "catmullrom", 0.5)
    // }, [])

    // const linePoints = useMemo(() => {
    //     return curve.getPoints(LINE_NB_POINTS)
    // }, [curve])

    // const shape = useMemo(() => {
    //     const shape = new THREE.Shape()
    //     shape.moveTo(0,-0.2)
    //     shape.lineTo(0,0.2)
    //     return shape
    // }, [curve])

    const cameraGroup = useRef()
    const airplane = useRef()
    const {size, viewport} = useThree()
    const mouse = useRef([0,0])

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current = [
                (e.clientX / size.width) * 2 - 1,
                (e.clientY / size.height) *2 - 1
            ]
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () =>{
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [size.width, size.height])

    useFrame(() => {
        const [x, y] = mouse.current;
        const targetX = (x * viewport.width) / 2;
        const targetY = (y * viewport.height) / 2;

        const rotationX = -(targetY / (viewport.height / 2)) * Math.PI / 4;
        const rotationY = -(targetX / (viewport.width / 2)) * Math.PI / 4;

        // airplane.current.position.x = targetX;
        // airplane.current.position.y = targetY;
        cameraGroup.current.position.x += targetX/50;
        console.log(`rotationX: ${rotationX}`)
        cameraGroup.current.position.y -= targetY/50;
        console.log(`rotationY: ${rotationY}`)
        airplane.current.rotation.x = rotationX;
        airplane.current.rotation.y = rotationY;

        cameraGroup.current.rotation.copy(airplane.current.rotation);
        cameraGroup.current.rotation.x = rotationX*1.2
        cameraGroup.current.rotation.y = rotationY*1.2
        cameraGroup.current.position.z -= 0.01
        // cameraGroup.current.position.x -= 0.01
        // cameraGroup.current.position.y -= 0.01
    })

    // useFrame((_state, delta) => {
    //     const curPointIndex = Math.min(
    //         Math.round(scroll.offset * linePoints.length),
    //         linePoints.length-1
    //     )
    //     const curPoint = linePoints[curPointIndex]
    //     const pointAhead = linePoints[Math.min(curPointIndex + 1, linePoints.length-1)];

    //     const xDisplacement = (pointAhead.x - curPoint.x) * 80
    //     // MATH.PI / 2 -> LEFT, -MATH.PI / 2 -> RIGHT

    //     const angleRotation = (xDisplacement < 0 ? 1 : -1) * Math.min(Math.abs(xDisplacement), Math.PI / 3)
    //     const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
    //         new THREE.Euler(
    //             airplane.current.rotation.x,
    //             airplane.current.rotation.y,
    //             angleRotation,
    //         )
    //     )

    //     const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
    //         new THREE.Euler(
    //             cameraGroup.current.rotation.x,
    //             angleRotation,
    //             cameraGroup.current.rotation.z
    //         )
    //     )

    //     airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta*2)
    //     cameraGroup.current.quaternion.slerp(targetCameraQuaternion, delta*2)
    //     cameraGroup.current.position.lerp(curPoint, delta*24)
    // })
    

    return (
        <>
        {/* <OrbitControls enableZoom = {true} /> */}
        <group ref={cameraGroup}>
        <PerspectiveCamera position = {[0,0,5]} fov={30} makeDefault/>
        <group ref={airplane}>
        <Float floatIntensity = {3} speed = {0.5}>
        <Airplane rotation-y={Math.PI / 2} scale={[0.2, 0.2, 0.2]} position-y={0.1}/>
        </Float>
        </group> 
        </group>
        {randomClouds}
        </>
    )
}