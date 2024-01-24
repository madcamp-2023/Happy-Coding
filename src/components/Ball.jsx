import React, { useRef, useState } from "react";
import * as THREE from "three";

import {
  BeachBall,
  SoccerBall,
  BasketBall,
  TennisBall,
  BaseBall,
  // BowlingBall,
  // FootBall,
  VolleyBall,
} from "../models/BallModel";

function useDynamicBall(length, maxCodeLength, idx) {
  const randomX = THREE.MathUtils.randFloatSpread(200);
  const randomY = THREE.MathUtils.randFloatSpread(50) + 100;
  const randomZ = THREE.MathUtils.randFloatSpread(200);

  if (length < maxCodeLength / 7) {
    return <TennisBall position={[randomX, randomY, randomZ]} />;
  } else if (length < (maxCodeLength / 7) * 2) {
    return <BaseBall position={[randomX, randomY, randomZ]} />;
  } else if (length < (maxCodeLength / 7) * 3) {
    return <VolleyBall position={[randomX, randomY, randomZ]} />;
  } else if (length < (maxCodeLength / 7) * 4) {
    return <TennisBall position={[randomX, randomY, randomZ]} />;
  } else if (length < (maxCodeLength / 7) * 5) {
    return <SoccerBall position={[randomX, randomY, randomZ]} />;
  } else if (length < (maxCodeLength / 7) * 6) {
    return <BasketBall position={[randomX, randomY, randomZ]} />;
  } else {
    return <BeachBall position={[randomX, randomY, randomZ]} />;
  }
  // if (length < maxCodeLength / 7) {
  //   return <TennisBall />;
  // } else if (length < (maxCodeLength / 7) * 2) {
  //   return <BaseBall />;
  // } else if (length < (maxCodeLength / 7) * 3) {
  //   return <VolleyBall />;
  // } else if (length < (maxCodeLength / 7) * 4) {
  //   return <TennisBall />;
  // } else if (length < (maxCodeLength / 7) * 5) {
  //   return <SoccerBall />;
  // } else if (length < (maxCodeLength / 7) * 6) {
  //   return <BasketBall />;
  // } else {
  //   return <BeachBall />;
  // }
}

export default function Ball({ length, idx, maxCodeLength }) {
  return <>{useDynamicBall(length, maxCodeLength, idx)}</>;
}
