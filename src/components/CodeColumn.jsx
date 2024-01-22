import React, { useRef } from "react";
import CodeSnippet from "./CodeSnippet.jsx";
import { useLocation } from "react-router-dom";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function CodeColumn() {
  const location = useLocation();
  const code = location.state ? location.state.code : null;
  console.log(code);
  const codeLines = code ? code.split("\n") : [];
  const codeRes = codeLines.map((line) => ({
    content: line.trim(),
    length: line.trim().length,
  }));

  // const { camera } = useThree();
  // const codeSnippetRefs = useRef([]);

  // // Calculate the bounding box that contains all the code snippets
  // const boundingBox = new THREE.Box3();
  // codeSnippetRefs.current.forEach((ref) => {
  //   if (ref.current) {
  //     const box = new THREE.Box3().setFromObject(ref.current);
  //     boundingBox.expandByPoint(box.min);
  //     boundingBox.expandByPoint(box.max);
  //   }
  // });

  // // Calculate the center and size of the bounding box
  // const center = new THREE.Vector3();
  // boundingBox.getCenter(center);
  // const size = new THREE.Vector3();
  // boundingBox.getSize(size);

  // // Set the camera position to be above the bounding box
  // camera.position.set(center.x, center.y + size.y * 1.5, center.z);

  // // Set the camera to look at the center of the bounding box
  // // camera.lookAt(center);

  // // Use the useFrame hook to update the camera position during animation
  // useFrame(() => {
  //   // Calculate the target position based on the bounding box
  //   const targetPosition = new THREE.Vector3(
  //     center.x,
  //     center.y + size.y * 0.8,
  //     center.z
  //   );

  //   // Move the camera smoothly towards the target position
  //   camera.position.lerp(targetPosition, 0.05);

  //   // Set the camera to look at the center of the bounding box
  //   camera.lookAt(center);
  // });

  return (
    <group>
      {codeRes.map((codeSnippet, index) => (
        <CodeSnippet
          key={index}
          code={codeSnippet.content}
          length={codeSnippet.length}
          idx={index}
          // ref={(ref) => (codeSnippetRefs.current[index] = ref)}
        />
      ))}
    </group>
  );
}
