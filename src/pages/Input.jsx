import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import styles from "./Input.module.css";

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
    <div className={styles.Input}>
      <div className={styles.InputContainer}>
        <Typography variant="h1" gutterBottom>
          Hello, World!
        </Typography>
        <div className={styles.UIContainer}>
          <TextField
            className={styles.TextField}
            label="Your Source Code"
            multiline
            fullWidth
            maxRows={10}
            value={code}
            onChange={handleCodeChange}
          />
          <Button
            className={styles.Button}
            variant="outlined"
            onClick={handleButtonClick}
          >
            Start
          </Button>
        </div>
      </div>
    </div>
  );
}
