import { Float, Line, PerspectiveCamera, useScroll } from "@react-three/drei";
import { Airplane } from "./Airplane";
import * as THREE from "three";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import Clouds from "./Clouds";

const LINE_NB_POINTS = 12000;

export default function AtmosScene() {
  const cameraGroup = useRef();
  const airplane = useRef();
  const scroll = useScroll();
  const [curve, setCurve] = useState(null);
  const [linePoints, setLinePoints] = useState([]);
  const [curveArray, setCurveArray] = useState([]);

  const code = localStorage.getItem("code");
  const codeLines = code ? code.split("\n") : [];
  const totalLength = codeLines.length;

  useEffect(() => {
    const newCurveArray = [];
    for (let i = 0; i < totalLength; i++) {
      const randomX = THREE.MathUtils.randFloatSpread(20);
      const randomY = THREE.MathUtils.randFloatSpread(20);
      newCurveArray.push(new THREE.Vector3(randomX, randomY, i * -10));
    }
    setCurveArray(newCurveArray);
    setCurve(
      new THREE.CatmullRomCurve3(newCurveArray, false, "catmullrom", 0.5)
    );
  }, [totalLength]);

  useEffect(() => {
    if (curve) {
      setLinePoints(curve.getPoints(LINE_NB_POINTS));
    }
  }, [curve]);

  useFrame((state, delta) => {
    if (curveArray.length > 0 && curve && linePoints.length > 0) {
      const curPointIndex = Math.min(
        Math.round(scroll.offset * linePoints.length),
        linePoints.length - 1
      );
      const curPoint = linePoints[curPointIndex];
      const pointAhead =
        linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)];

      if (curPoint && pointAhead) {
        const xDisplacement = (pointAhead.x - curPoint.x) * 80;
        const angleRotation =
          (xDisplacement < 0 ? 1 : -1) *
          Math.min(Math.abs(xDisplacement), Math.PI / 3);

        const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(
            airplane.current.rotation.x,
            airplane.current.rotation.y,
            angleRotation
          )
        );

        const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(
            cameraGroup.current.rotation.x,
            angleRotation,
            cameraGroup.current.rotation.z
          )
        );

        airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
        cameraGroup.current.quaternion.slerp(targetCameraQuaternion, delta * 2);
        cameraGroup.current.position.lerp(curPoint, delta * 24);
      }
    }
  });

  return (
    <>
      <group ref={cameraGroup}>
        <PerspectiveCamera
          position={[0, 0, 7]}
          fov={30}
          near={0.1}
          far={1000}
          aspect={window.innerWidth / window.innerHeight}
          makeDefault
        />
        <group ref={airplane}>
          <Float floatIntensity={2} speed={2}>
            <Airplane
              rotation-y={Math.PI / 2}
              scale={[0.2, 0.2, 0.2]}
              position-y={0.1}
            />
          </Float>
        </group>
      </group>
      <group position-y={-1.5}>
        {linePoints.length > 0 && (
          <Line
            points={linePoints}
            color={"white"}
            opacity={0.7}
            transparent
            lineWidth={10}
          />
        )}
      </group>
      {curveArray.length > 0 && <Clouds curveArray={curveArray} />}
    </>
  );
}
