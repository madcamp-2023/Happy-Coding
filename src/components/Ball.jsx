import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import {
  BeachBall,
  SoccerBall,
  BasketBall,
  TennisBall,
  BaseBall,
  BowlingBall,
  FootBall,
  VolleyBall,
} from "../models/BallModel";

function useDynamicBall(length, maxCodeLength, idx) {
  if (length < maxCodeLength / 7) {
    return <TennisBall />;
  } else if (length < (maxCodeLength / 7) * 2) {
    return <BaseBall />;
  } else if (length < (maxCodeLength / 7) * 3) {
    return <VolleyBall />;
  } else if (length < (maxCodeLength / 7) * 4) {
    return <TennisBall />;
  } else if (length < (maxCodeLength / 7) * 5) {
    return <FootBall />;
  } else if (length < (maxCodeLength / 7) * 6) {
    return <BasketBall />;
  } else {
    return <BeachBall />;
  }
}

export default function Ball({ length, idx, maxCodeLength }) {
  const radius = 1; // Adjust the radius of the ball
  const [position, setPosition] = useState([0, 20 + idx * 5, 0]); // Initial position
  const [ref, api] = useSphere(() => ({
    type: "Sphere",
    args: [radius],
    mass: 1, // Adjust the mass of the ball
    position: [0, 20 + idx * 5, 0], // Initial position
  }));

  return (
    <mesh ref={ref} castShadow receiveShadow frustumCulled={false}>
      {useDynamicBall(length, maxCodeLength, idx)}
    </mesh>
  );
}
