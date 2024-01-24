import React, { useState, useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Physics, usePlane, useSphere } from "@react-three/cannon";
import { Environment, OrbitControls } from "@react-three/drei";
import { BallCollider, RigidBody } from "@react-three/rapier";

function Plane({ position, rotation, size }) {
  // Use usePlane to create a physics plane
  const [ref] = usePlane(() => ({ type: "Static", position, rotation }));

  return (
    <>
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={size} />
        <meshStandardMaterial color="brown" />
      </mesh>
    </>
  );
}

export default function BallBasket() {
  const planeProps = [
    { position: [0, 0, 0], rotation: [-Math.PI / 2, 0, 0], size: [500, 500] },
    {
      position: [-250, 250, 0],
      rotation: [0, Math.PI / 2, 0],
      size: [500, 500],
    }, // Left
    {
      position: [250, 250, 0],
      rotation: [0, -Math.PI / 2, 0],
      size: [500, 500],
    }, // Right
    { position: [0, 250, -250], rotation: [0, 0, 0], size: [500, 500] }, // Front
    { position: [0, 250, 250], rotation: [0, Math.PI, 0], size: [500, 500] }, // Back
  ];

  return (
    <>
      {planeProps.map((props, index) => (
        <Plane key={index} {...props} />
      ))}
    </>
  );
}
