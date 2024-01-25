import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import styles from "./SideNavigation.module.css";

export default function SideNavigation({ before, next, color = "secondary" }) {
  const navigate = useNavigate();

  const navigateToNext = () => {
    navigate(next);
  };

  const navigateToPrevious = () => {
    navigate(before);
  };
  return (
    <div className={styles.SideNavigation}>
      <div className={styles.NavigationBefore}>
        <IconButton
          color={color}
          size="large"
          onClick={navigateToPrevious}
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        >
          <NavigateBeforeIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className={styles.NavigationNext}>
        <IconButton
          color={color}
          size="large"
          onClick={navigateToNext}
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        >
          <NavigateNextIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
}
