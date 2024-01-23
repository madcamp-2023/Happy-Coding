import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { threeToCannon, ShapeType } from "three-to-cannon";
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
    return <BowlingBall />;
  } else if (length < (maxCodeLength / 7) * 6) {
    return <BasketBall />;
  } else {
    return <BeachBall />;
  }
}

export default function Ball({ length, idx, maxCodeLength }) {
  // const [ref, api] = useSphere(() => ({
  //   type: "Sphere",
  //   args: [radius],
  //   mass: 1, // Adjust the mass of the ball
  //   position: [0, 20 + idx * 5, 0], // Initial position
  // }));
  // const model = useDynamicBall(length, maxCodeLength, idx)
  // const result = threeToCannon(model, {type: ShapeType.SPHERE})
  const [ref] = useSphere(() => ({ mass: 1, position: [0, 100, 0] }));
  return (
    <mesh ref={ref} castShadow receiveShadow>
      {useDynamicBall(length, maxCodeLength, idx)}
    </mesh>
  );
}
