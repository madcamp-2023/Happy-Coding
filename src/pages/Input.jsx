import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Input() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleButtonClick = () => {
    navigate("/codefloat", { state: { code } });
  };

  return (
    <div>
      <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={10}
        value={code}
        onChange={handleCodeChange}
      />
      <Button variant="outlined" onClick={handleButtonClick}>
        Start
      </Button>
    </div>
  );
}
