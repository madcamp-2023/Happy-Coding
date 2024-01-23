import React from "react";
import { usePlane } from "@react-three/cannon";

export default function Plane(props) {
  usePlane(() => ({ mass: 0, ...props }));

  return null;
}
