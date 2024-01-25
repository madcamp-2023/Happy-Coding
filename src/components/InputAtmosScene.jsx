import { Float, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useThree } from "react-three-fiber";
import CloudModel from "../models/CloudModel";

const getRandomValue = (min, max) => {
  return Math.random() * (max - min) + min;
};

const generateRandomClouds = (count) => {
  const clouds = [];
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "grey"];
  const usedPositions = [];

  const isPositionAvailable = (position) => {
    for (const usedPosition of usedPositions) {
      const distance = Math.sqrt(
        Math.pow(position[0] - usedPosition[0], 2) +
          Math.pow(position[1] - usedPosition[1], 2) +
          Math.pow(position[2] - usedPosition[2], 2)
      );

      if (distance < 500) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < count; i++) {
    let color, scale, position, cloud;
    do {
      color = colors[Math.floor(getRandomValue(0, colors.length))];
      scale = [
        getRandomValue(1, 2),
        getRandomValue(1, 3),
        getRandomValue(1, 3),
      ];
      position = [
        getRandomValue(-100, 100),
        getRandomValue(-100, 100),
        getRandomValue(-100, 100),
      ];
    } while (!isPositionAvailable(position));
    cloud = (
      <CloudModel key={i} color={color} scale={scale} position={position} />
    );
    clouds.push(cloud);
  }
  return clouds;
};

const LINE_NB_POINTS = 12000;

export default function InputAtmosScene() {
  const code = localStorage.getItem("code");
  const codeLines = code ? code.split("\n") : [];
  const codeRes = codeLines.map((line) => ({
    content: line.trim(),
    length: line.trim().length,
  }));

  const randomClouds = generateRandomClouds(1000);

  const cameraGroup = useRef();
  const airplane = useRef();
  const { size, viewport } = useThree();
  const mouse = useRef([0, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = [
        (e.clientX / size.width) * 2 - 1,
        -(e.clientY / size.height) * 2 - 1,
      ];
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size.width, size.height]);

  return (
    <>
      <OrbitControls enableZoom={false} />
      <group ref={cameraGroup}>
        <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />
        <group ref={airplane}>
          <Float floatIntensity={3} speed={0.5}>
            {randomClouds}
          </Float>
        </group>
      </group>
    </>
  );
}
