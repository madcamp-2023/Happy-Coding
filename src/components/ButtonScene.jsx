import { Canvas } from "react-three-fiber";
import React, { useRef, useState } from 'react';
import { Html, OrbitControls } from "@react-three/drei";

const ButtonScene = () => {
    const [buttonText, setButtonText] = useState("Start");
    const meshRef = useRef()
    
    const handleButtonClick = () => {
        setButtonText("Clicked!");
        // 여기에 버튼 클릭 시 수행할 동작 추가 가능
    };

    return (
        // <Canvas>
            // <OrbitControls />
            <mesh ref = {meshRef} rotation={[0,0,0]}>
                <Html center>
                    <div style={{ position: 'absolute' }}>
                        <button
                            onClick={handleButtonClick}
                            style={{
                                padding: '10px',
                                fontSize: '16px',
                                cursor: 'pointer',
                                border: 'none',
                                background: '#3498db',
                                color: 'white',
                                borderRadius: '5px'
                            }}
                        >
                            {buttonText}
                        </button>
                    </div>
                </Html>
            </mesh>
        // </Canvas>
    );
}

export default ButtonScene;
