/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: SusanKing (https://sketchfab.com/krolzuzannapl)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/balls-e041d432d5c141e0a8f57ce2784ca47d
Title: Balls
*/

import React, { useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { RigidBody, BallCollider } from "@react-three/rapier";

export function BeachBall({ position = [0, 0, 0] }) {
  const { nodes, materials } = useGLTF("/assets/balls/scene.gltf");
  const [ref, api] = useSphere(() => ({
    mass: 15, // Adjust the mass of the ball
    position, // Initial position of the ball
    gravity: [0, -20, 0],
    args: [66],
  }));
  const [isHovered, setHover] = useState(false);

  useFrame(() => {
    if (ref.current && isHovered) {
      api.applyImpulse([0, 50, -50], position);
    }
  });
  return (
    <mesh
      ref={ref}
      rotation={[-0.435, 0.271, -1.922]}
      scale={45}
      castShadow
      receiveShadow
      onPointerEnter={() => {
        setHover(true);
      }}
      onPointerLeave={() => {
        setHover(false);
      }}
    >
      <mesh
        geometry={nodes.beach_ball_red_0.geometry}
        material={materials.material}
      />
      <mesh
        geometry={nodes.beach_ball_white_0.geometry}
        material={materials.white}
      />
      <mesh
        geometry={nodes.beach_ball_yellow_0.geometry}
        material={materials.yellow}
      />
      <mesh
        geometry={nodes.beach_ball_blue_0.geometry}
        material={materials.blue}
      />
    </mesh>
  );
}

export function SoccerBall({ position = [72.532, 0, -1.391] }) {
  const { nodes, materials } = useGLTF("/assets/balls/scene.gltf");
  const [ref, api] = useSphere(() => ({
    mass: 30, // Adjust the mass of the ball
    position, // Initial position of the ball
    gravity: [0, -80, 0],
    args: [20],
  }));
  const [isHovered, setHover] = useState(false);
  useFrame(() => {
    if (ref.current && isHovered) {
      api.applyImpulse([0, 50, -50], position);
    }
  });
  return (
    <mesh
      ref={ref}
      rotation={[-Math.PI / 2, 0, -0.453]}
      scale={13.123}
      castShadow
      receiveShadow
      onPointerEnter={() => {
        setHover(true);
      }}
      onPointerLeave={() => {
        setHover(false);
      }}
    >
      <mesh
        geometry={nodes.soccer_ball_black_soccer_0.geometry}
        material={materials.black_soccer}
      />
      <mesh
        geometry={nodes.soccer_ball_white_soccer_0.geometry}
        material={materials.white_soccer}
      />
    </mesh>
  );
}

export function BasketBall({ position = [69.604, -0.017, -49.927] }) {
  const { nodes, materials } = useGLTF("/assets/balls/scene.gltf");
  const [ref, api] = useSphere(() => ({
    mass: 80, // Adjust the mass of the ball
    position, // Initial position of the ball
    gravity: [0, -80, 0],
    args: [21],
  }));
  const [isHovered, setHover] = useState(false);

  useFrame(() => {
    if (ref.current && isHovered) {
      api.applyImpulse([0, 50, -50], position);
    }
  });
  return (
    <mesh
      ref={ref}
      rotation={[-1.093, -0.506, -1.889]}
      scale={[14.499, 14.547, 14.499]}
      castShadow
      receiveShadow
      onPointerEnter={() => {
        setHover(true);
      }}
      onPointerLeave={() => {
        setHover(false);
      }}
    >
      <mesh
        geometry={nodes.basket_ball_orange_basket_0.geometry}
        material={materials.orange_basket}
      />
      <mesh
        geometry={nodes.basket_ball_black_basket_0.geometry}
        material={materials.black_basket}
      />
    </mesh>
  );
}

export function TennisBall({ position = [98.432, 0, -26.27] }) {
  const { nodes, materials } = useGLTF("/assets/balls/scene.gltf");
  const [ref, api] = useSphere(() => ({
    mass: 50, // Adjust the mass of the ball
    position, // Initial position of the ball
    gravity: [0, -70, 0],
    args: [6],
  }));
  const [isHovered, setHover] = useState(false);
  useFrame(() => {
    if (ref.current && isHovered) {
      api.applyImpulse([0, 50, -50], position);
    }
  });
  return (
    <mesh
      ref={ref}
      rotation={[-2.174, 0.475, 0.985]}
      scale={3.55}
      castShadow
      receiveShadow
      onPointerEnter={() => {
        setHover(true);
      }}
      onPointerLeave={() => {
        setHover(false);
      }}
    >
      <mesh
        geometry={nodes.tennis_ball_green_tennis_0.geometry}
        material={materials.green_tennis}
      />
      <mesh
        geometry={nodes.tennis_ball_white_tennis_0.geometry}
        material={materials.white_tennis}
      />
    </mesh>
  );
}

export function BaseBall({ position = [94.175, 0, -14.348] }) {
  const { nodes, materials } = useGLTF("/assets/balls/scene.gltf");
  const [ref, api] = useSphere(() => ({
    mass: 40, // Adjust the mass of the ball
    position, // Initial position of the ball
    gravity: [0, -50, 0],
    args: [6],
  }));
  const [isHovered, setHover] = useState(false);
  useFrame(() => {
    if (ref.current && isHovered) {
      api.applyImpulse([0, 50, -50], position);
    }
  });
  return (
    <mesh
      ref={ref}
      rotation={[-0.766, 1.293, -2.139]}
      scale={0.075}
      castShadow
      receiveShadow
      onPointerEnter={() => {
        setHover(true);
      }}
      onPointerLeave={() => {
        setHover(false);
      }}
    >
      <mesh
        geometry={nodes.baseball_baseball_red_0.geometry}
        material={materials.baseball_red}
      />
      <mesh
        geometry={nodes.baseball_white_baseball_0.geometry}
        material={materials.white_baseball}
      />
    </mesh>
  );
}

export function VolleyBall({ position = [42.508, 0, -37.848] }) {
  const { nodes, materials } = useGLTF("/assets/balls/scene.gltf");
  const [ref, api] = useSphere(() => ({
    mass: 100, // Adjust the mass of the ball
    position, // Initial position of the ball
    gravity: [0, -70, 0],
    args: [18],
  }));
  const [isHovered, setHover] = useState(false);
  useFrame(() => {
    if (ref.current && isHovered) {
      api.applyImpulse([0, 50, -50], position);
    }
  });
  return (
    <mesh
      ref={ref}
      rotation={[-2.317, 0.739, 0]}
      scale={8.032}
      castShadow
      receiveShadow
      onPointerEnter={() => {
        setHover(true);
      }}
      onPointerLeave={() => {
        setHover(false);
      }}
    >
      <mesh
        geometry={nodes.volley_ball_volley_yellow_0.geometry}
        material={materials.volley_yellow}
      />
      <mesh
        geometry={nodes.volley_ball_volley_blue_0.geometry}
        material={materials.volley_blue}
      />
      <mesh
        geometry={nodes.volley_ball_volley_white_0.geometry}
        material={materials.volley_white}
      />
    </mesh>
  );
}
/*
export function BowlingBall({ props }) {
  const { nodes, materials } = useGLTF("/assets/balls/scene.gltf");

  return (
    <group
      position={[106.646, 0, -62.317]}
      rotation={[-Math.PI / 2, 0, 1.298]}
      scale={[10.835, 10.835, 10.804]}
    >
      <mesh
        geometry={nodes.bowling_ball_bowling_0.geometry}
        material={materials.bowling}
      />
      <mesh
        geometry={nodes.bowling_ball_holes_0.geometry}
        material={materials.holes}
      />
    </group>
  );
}
*/
/*
export function FootBall({ props }) {
  const { nodes, materials } = useGLTF("/assets/balls/scene.gltf");

  return (
    <group
      position={[80.137, 0, -89.852]}
      rotation={[-Math.PI, 1.141, 2.457]}
      scale={[8.061, 8.061, 11.357]}
    >
      <mesh
        geometry={nodes.football_football001_0.geometry}
        material={materials["football.001"]}
      />
      <mesh
        geometry={nodes.football_football_white001_0.geometry}
        material={materials["football_white.001"]}
      />
    </group>
  );
}
*/

useGLTF.preload("/assets/balls/scene.gltf");
