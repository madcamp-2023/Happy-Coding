import React, { useRef } from "react";
import { Box } from "@react-three/drei";
import * as THREE from "three";
import a from "../assets/music/a.mp3";
import aSharp from "../assets/music/a_sharp.mp3";
import b from "../assets/music/b.mp3";
import c from "../assets/music/c.mp3";
import cSharp from "../assets/music/c_sharp.mp3";
import d from "../assets/music/d.mp3";
import dSharp from "../assets/music/d_sharp.mp3";
import e from "../assets/music/e.mp3";
import f from "../assets/music/f.mp3";
import fSharp from "../assets/music/f_sharp.mp3";
import g from "../assets/music/g.mp3";
import gSharp from "../assets/music/g_sharp.mp3";
import cUp from "../assets/music/c_up.mp3";

/* Calculate soundSrc based on length and maxCodeLength */
function useDynamicSound(length, maxCodeLength) {
  let soundSrc = c;
  if (length < maxCodeLength / 13) {
    soundSrc = c;
  } else if (length < (maxCodeLength / 13) * 2) {
    soundSrc = cSharp;
  } else if (length < (maxCodeLength / 13) * 3) {
    soundSrc = d;
  } else if (length < (maxCodeLength / 13) * 4) {
    soundSrc = dSharp;
  } else if (length < (maxCodeLength / 13) * 5) {
    soundSrc = e;
  } else if (length < (maxCodeLength / 13) * 6) {
    soundSrc = f;
  } else if (length < (maxCodeLength / 13) * 7) {
    soundSrc = fSharp;
  } else if (length < (maxCodeLength / 13) * 8) {
    soundSrc = g;
  } else if (length < (maxCodeLength / 13) * 9) {
    soundSrc = gSharp;
  } else if (length < (maxCodeLength / 13) * 10) {
    soundSrc = a;
  } else if (length < (maxCodeLength / 13) * 11) {
    soundSrc = aSharp;
  } else if (length < (maxCodeLength / 13) * 12) {
    soundSrc = b;
  } else {
    soundSrc = cUp;
  }
  return soundSrc;
}

function CodeSnippet({ length, idx, maxCodeLength }) {
  // const texture = new TextureLoader().load("");
  const boxMeshRef = useRef();
  const soundSrc = useDynamicSound(length, maxCodeLength);
  const audio = new Audio(soundSrc);
  audio.loop = true;
  return (
    <>
      <Box
        args={[1, length, 1]}
        position={[idx * 2, 0, 0]}
        ref={boxMeshRef}
        onPointerEnter={() => {
          audio.play();
          console.log(soundSrc);
        }}
        onPointerLeave={() => {
          audio.pause();
        }}
      >
        <meshStandardMaterial
          attach="material"
          color={"#000000"}
          side={THREE.BackSide}
        />
        <meshStandardMaterial
          attach="material"
          color={"#000000"}
          side={THREE.FrontSide}
          // map={texture}
        />
      </Box>
      <mesh position={[0, 0.1, 0]} scale={[6, 0.2, 6]} receiveShadow />
    </>
  );
}

export default CodeSnippet;
