import { Canvas } from "react-three-fiber";
import React, { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { Navigate } from "react-router-dom";

const InputScene = () => {
  const inputRef = useRef();
  const [code, setCode] = useState("");

  const handleInputChange = (e) => {
    setCode(e.target.value);
  };

  const handleButtonClick = () => {
    localStorage.setItem("code", code);
    Navigate("/codefloat", { state: { code } });
  };

  return (
    <mesh>
      <Html center>
        <div style={{ textAlign: "center" }}>
          <input
            ref={inputRef}
            type="text"
            onChange={handleInputChange}
            style={{
              width: "300px", // 변경된 부분: 크기를 300px로 늘림
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            value={code}
          />
          <button
            onClick={handleButtonClick}
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              background: "#3498db",
              color: "white",
              borderRadius: "5px",
              margin: "30px 0",
            }}
          >
            Start
          </button>
        </div>
      </Html>
    </mesh>
  );
};

export default InputScene;
