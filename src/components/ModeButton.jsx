import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function ModeButton({ curMode }) {
  // curMode: "free" || "path"
  const navigate = useNavigate();

  const onFree = () => {
    navigate("/codeatmos");
  };
  const onPath = () => {
    navigate("/freeatmos");
  };

  return curMode === "free" ? (
    <Button variant="outlined" onClick={onFree}>
      Change Mode
    </Button>
  ) : (
    <Button variant="outlined" onClick={onPath}>
      Change Mode
    </Button>
  );
}
