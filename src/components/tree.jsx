import React, {useRef} from 'react';

const Trunk = ({position}) => {
    const trunkRef = useRef();

    return (
        <mesh ref={trunkRef} position={position}>
            <cylinderGeometry args={[0.5, 0.5, 4, 8]} />
            <meshStandardMaterial color = {'brown'} />
        </mesh>
    )
}

const Leaves = ({position}) => {
    const leavesRef = useRef();
    return (
        <mesh ref={leavesRef} position={position}>
            <coneGeometry args={[2,4,8]} />
            <meshStandardMaterial color={'green'} />
        </mesh>
    )
}

const Tree = ({position}) => {
    const [x, y, z] = position || [0, 0, 0]
    return (
        <group>
            <Trunk position = {position}/>
            <Leaves position = {[position[0], position[1]+2, position[2]]}/>
        </group>
    )
}

const Trees = () => {
    const treesPositions = [
        [0,0,0],
        [5,0,0],
        [10,0,0],
        [15,0,0],
        [20,0,0],
        [25,0,0],
        [30,0,0]
    ]
    return (
        <>
        {treesPositions.map((position, index) => (
            <Tree key = {index} position = {position} />
        )
        )}
        </>
    )
}

export const Ground = () => {
    const groundRef = useRef();
    return (
        <mesh ref={groundRef} rotation={[-Math.PI/2, 0, 0]} position = {[0, -5, 0]}>
            <planeGeometry args={[100,100,100,100]} />
            <meshStandardMaterial color={'yellow'} />
        </mesh>
    )
}

// export const Mountain = () => {
//     const mountainRef = useRef();
//     return(
//         <mesh ref = {mountainRef} rotation = {[-Math.PI/2, 0, 0]} position = {[0,0,0]}>
//             <planeGeometry args={[100,100,100,100]}/>
//             <meshStandardMaterial color={'yellowgreen'}/>
//         </mesh>
//     )
// }

export default Trees;
