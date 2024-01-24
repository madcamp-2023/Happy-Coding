import React, {useRef, useEffect} from "react";
import { useThree, useFrame } from "react-three-fiber";

const Camera = ({position}) => {
    const {camera, gl} = useThree();
    const mouseX = useRef(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            mouseX.current = (event.clientX / window.innerWidth) * 2 -1
        }

        if (typeof window !== 'undefined'){
            window.addEventListener('mousemove', handleMouseMove)
        }
        
        return () => {
            if (typeof window !== 'undefined'){
            window.removeEventListener('mousemove', handleMouseMove)
            }
        }
    }, [])

    useFrame(() => {
        camera.position.set(position[0], position[1] + mouseX.current*5, position[2])
    })
    return null
}

export default Camera