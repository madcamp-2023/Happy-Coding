import React from "react";
import CodeSnippet from "./CodeSnippet.jsx";
import { useLocation } from "react-router-dom";
import Ball from "./Ball.jsx";

export default function Balls() {
  const location = useLocation();
  const code = localStorage.getItem("code");
  const codeLines = code ? code.split("\n") : [];
  const codeRes = codeLines.map((line) => ({
    content: line.trim(),
    length: line.trim().length,
  }));

  const maxCodeLength = codeRes.reduce(
    (max, codeSnippet) => Math.max(max, codeSnippet.length),
    0
  );

  return (
    <group>
      {codeRes.map((codeSnippet, index) => (
        <Ball
          key={index}
          length={codeSnippet.length}
          maxCodeLength={maxCodeLength}
          idx={index}
        />
      ))}
    </group>
  );
}
