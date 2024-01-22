import React from "react";
import ReactDOM from "react-dom/client";
import { Box } from "@react-three/drei";
import { TextureLoader } from "three";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import html2canvas from "html2canvas";
import { useRef, useEffect } from "react";
import * as THREE from "three";

function CodeSnippet({ code, length, idx }) {
  const texture = new TextureLoader().load("");
  const boxMeshRef = useRef();

  // useEffect(() => {
  //   const generateTexture = async () => {
  //     const syntaxHighlighter = document.createElement("div");
  //     syntaxHighlighter.style.width = "100%";
  //     syntaxHighlighter.style.height = "100%";
  //     syntaxHighlighter.style.position = "absolute";
  //     syntaxHighlighter.style.top = "-10000px";
  //     document.body.appendChild(syntaxHighlighter);

  //     ReactDOM.createRoot(syntaxHighlighter).render(
  //       <SyntaxHighlighter language="javascript" style={materialDark}>
  //         {code}
  //       </SyntaxHighlighter>
  //     );

  //     try {
  //       await new Promise((resolve) => setTimeout(resolve, 0));

  //       const canvas = await html2canvas(syntaxHighlighter, {
  //         backgroundColor: null,
  //       });

  //       const dataUrl = canvas.toDataURL("png");

  //       const newTexture = new TextureLoader().load(dataUrl);

  //       // Set the material of the box faces
  //       boxMeshRef.current.material.map = newTexture;
  //       boxMeshRef.current.material.side = THREE.FrontSide;
  //       boxMeshRef.current.material.needsUpdate = true;
  //     } catch (error) {
  //       console.error("Error generating texture:", error);
  //     } finally {
  //       document.body.removeChild(syntaxHighlighter);
  //     }
  //   };

  //   generateTexture();
  // }, [code]);

  return (
    <>
      <Box args={[1, length, 1]} position={[idx * 2, 0, 0]}>
        <meshStandardMaterial
          attach="material"
          color={"white"}
          side={THREE.BackSide} // Set other faces to BackSide
          ref={boxMeshRef}
        />
        <meshStandardMaterial
          attach="material"
          color={"white"}
          side={THREE.FrontSide} // Set front face to FrontSide
          map={texture}
          ref={boxMeshRef}
        />
      </Box>
      <mesh position={[0, 0.1, 0]} scale={[6, 0.2, 6]} receiveShadow />
    </>
  );
}

export default CodeSnippet;
