import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "./Input.css";
import InputAtmos from "../components/InputAtmos";

export default function Input() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleButtonClick = () => {
    localStorage.setItem("code", code);
    navigate("/codefloat", { state: { code } });
  };

  return (
    <div>
      <div className="Input">
        <div className="InputContainer">
          <Typography variant="h1" gutterBottom>
            Happy Coding!
          </Typography>
          <div className="UIContainer">
            <TextField
              className="TextField"
              label="Your Source Code"
              multiline
              fullWidth
              maxRows={10}
              value={code}
              onChange={handleCodeChange}
            />
            <Button
              className="Button"
              variant="contained"
              onClick={handleButtonClick}
            >
              Start
            </Button>
          </div>
        </div>
      </div>
      <InputAtmos />
    </div>
  );
}
