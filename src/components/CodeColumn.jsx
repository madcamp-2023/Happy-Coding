import React, { useState, useEffect } from "react";
import CodeSnippet from "./CodeSnippet.jsx";
import { useLocation } from "react-router-dom";

export default function CodeColumn() {
  const [code, setCode] = useState(null);

  useEffect(() => {
    // Fetch code from localStorage
    const storedCode = localStorage.getItem("code");

    // Set the code in state when available
    if (storedCode) {
      setCode(storedCode);
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount

  if (code === null) {
    // If code is not available yet, you might want to render a loading state
    return null;
  }
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
