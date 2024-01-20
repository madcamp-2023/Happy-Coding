import "./App.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import Island from "./models/Island";

extend({ OrbitControls });

function CameraControls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controlsRef = useRef();

  useEffect(() => {
    controlsRef.current = new OrbitControls(camera, domElement);
    controlsRef.current.autoRotate = true;
    controlsRef.current.autoRotateSpeed = -0.2;

    return () => {
      controlsRef.current.dispose();
    };
  }, [camera, domElement]);

  return null;
}

function AnimationCanvas() {
  const keyMap = useRef({});

  const groupRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event);
      keyMap.current[event.code] = true;
    };

    const handleKeyUp = (event) => {
      console.log(event);
      keyMap.current[event.code] = false;
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(({ camera }, delta) => {
    if (keyMap.current["KeyA"]) {
      camera.position.x -= 1 * delta;
    }
    if (keyMap.current["KeyD"]) {
      camera.position.x += 1 * delta;
    }
    // Add more conditions for other movement directions if needed
  });

  return (
    <group ref={groupRef}>
      <Island />
    </group>
  );
}

function App() {
  return (
    <div className="anim">
      <Canvas
        colorManagement={false}
        camera={{ position: [100, 5, 100], fov: 75 }}
        tabIndex={0}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <AnimationCanvas />
        <CameraControls />
      </Canvas>
    </div>
  );
}

export default App;
