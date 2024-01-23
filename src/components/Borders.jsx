import React from "react";
import Plane from "./Plane";

export default function Borders() {
  return (
    <>
      <Plane
        position={[0, -50, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        color={"white"}
      />
      <Plane
        position={[-50, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        color={"white"}
      />
      <Plane
        position={[50, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        color={"white"}
      />
      <Plane position={[0, 0, -50]} rotation={[0, 0, 0]} color={"white"} />
      <Plane
        position={[0, 0, 50]}
        rotation={[0, -Math.PI, 0]}
        color={"white"}
      />
    </>
  );
}
