import { Float, OrbitControls } from "@react-three/drei";
import { Airplane } from "./Airplane";
import { Cloud } from "./Cloud";

export const Experience = () => {
    return (
        <>
        <OrbitControls />
        <Float floatIntensity = {2} speed = {2}>
        <Airplane rotation-y={Math.PI / 2} scale={[0.5, 0.5, 0.5]} position-y={0.1}/>
        </Float>
        {/* <Cloud color = "red" opacity = {0.1} scale={[0.1, 0.1, 0.1]} position={[-2,-4,-1]}/> */}
        <Cloud color = {"red"} scale = {[1,1,1]} position ={[-1,-1,-1]}/>
        {/* <Cloud /> */}
        </>
    )
}