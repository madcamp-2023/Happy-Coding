import React from "react";
import CloudModel from "../models/CloudModel";
import * as THREE from "three";

function setColor(length, maxCodeLength) {
  if (length < maxCodeLength / 7) {
    return "red";
  } else if (length < (maxCodeLength / 7) * 2) {
    return "orange";
  } else if (length < (maxCodeLength / 7) * 3) {
    return "yellow";
  } else if (length < (maxCodeLength / 7) * 4) {
    return "green";
  } else if (length < (maxCodeLength / 7) * 5) {
    return "blue";
  } else if (length < (maxCodeLength / 7) * 6) {
    return "purple";
  } else {
    return "grey";
  }
}

export default function Clouds({ curveArray }) {
  const code = localStorage.getItem("code");
  const codeLines = code ? code.split("\n") : [];
  const codeRes = codeLines.map((line) => ({
    length: line.trim().length,
  }));
  const maxCodeLength = codeRes.reduce(
    (max, codeSnippet) => Math.max(max, codeSnippet.length),
    0
  );
  return codeRes.map((codeSnippet, idx) => {
    const currentCurvePoint = curveArray[idx];
    const cloudColor = setColor(codeSnippet.length, maxCodeLength);
    const cloudScale = THREE.MathUtils.randInt(1, 3);
    return (
      <CloudModel
        key={idx}
        color={cloudColor}
        scale={cloudScale}
        position={[
          currentCurvePoint.x + THREE.MathUtils.randFloatSpread(20),
          currentCurvePoint.y + THREE.MathUtils.randFloatSpread(20),
          currentCurvePoint.z + THREE.MathUtils.randFloatSpread(20),
        ]}
      />
    );
  });
}
