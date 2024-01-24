import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { usePlane } from "@react-three/cannon";

function Plane({ position, rotation, size, isFloor = false }) {
  const [ref] = usePlane(() => ({ type: "Static", position, rotation }));
  const woodTexture = useLoader(TextureLoader, "assets/grassTexture.jpg");

  return !isFloor ? (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={size} />
      <meshStandardMaterial map={woodTexture} />
    </mesh>
  ) : (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={size} />
      <meshStandardMaterial map={woodTexture} />
    </mesh>
  );
}

export default function BallBasket() {
  const planeProps = [
    // { position: [0, 0, 0], rotation: [-Math.PI / 2, 0, 0], size: [500, 500] },
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
      <Plane
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        size={[500, 500]}
        isFloor
      />
    </>
  );
}
