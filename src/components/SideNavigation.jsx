import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import styles from "./SideNavigation.module.css";

export default function SideNavigation({ before, next }) {
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
        <IconButton color="secondary" size="large" onClick={navigateToPrevious}>
          <NavigateBeforeIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className={styles.NavigationNext}>
        <IconButton color="secondary" size="large" onClick={navigateToNext}>
          <NavigateNextIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
}
