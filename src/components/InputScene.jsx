import { Canvas } from "react-three-fiber";
import React, { useRef } from 'react';
import { Html } from "@react-three/drei";
import { Navigate } from "react-router-dom";

const InputScene = () => {
    const inputRef = useRef();

    const handleInputChange = (e) => {
        console.log(e.target.value);
    };

    // const handleButtonClick = () => {
    //     localStorage.setItem("code", code);
    //     Navigate("/codefloat", {state: {code}});
    // }

    return (
        // <Canvas>
            <mesh>
                <Html center>
                    <div>
                        <input
                            ref={inputRef}
                            type="text"
                            onChange={handleInputChange}
                            style={{
                                width: '300px',  // 변경된 부분: 크기를 300px로 늘림
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px'
                            }}
                        />
                    </div>
                </Html>
            </mesh>
        // </Canvas>
    );
}

export default InputScene;
