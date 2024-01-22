import React from "react";
import CodeSnippet from "./CodeSnippet.jsx";
import { useLocation } from "react-router-dom";

export default function CodeColumn() {
  const location = useLocation();
  const code = location.state ? location.state.code : null;
  // console.log(code);
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
        <CodeSnippet
          key={index}
          code={codeSnippet.content}
          length={codeSnippet.length}
          maxCodeLength={maxCodeLength}
          idx={index}
        />
      ))}
    </group>
  );
}
