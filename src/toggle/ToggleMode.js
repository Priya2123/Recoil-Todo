import React, { useState, useEffect } from "react";
import { ThemeConsumer, withTheme } from "styled-components";
import { makeStyles } from "@material-ui/core";
import daymode from "../assets/day-mode.png";
import nightmode from "../assets/night-mode.png";
import "./Toggle.css";

const useStyles = makeStyles({
  themeToggleWrapper: {
    cursor: "pointer",
  },
  themeToggleIcon: {
    width: "100%",
    height: "100%",
  },
});

const ToggleMode = (props) => {
  const [checked, setChecked] = useState(false);
  const classes = useStyles(props);
  const toggleChecked = (theme) => {
    theme.setTheme(
      theme.mode === "dark"
        ? { ...theme, mode: "light", paper: "light" }
        : { ...theme, mode: "dark", paper: "dark" }
    );
  };

  useEffect(() => {
    if (props.theme.mode === "dark") {
      setChecked(true);
    } else if (props.theme.mode === "light") {
      setChecked(false);
    }
  }, [props.theme]);

  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          <input
            className="react-switch-checkbox"
            id={`react-switch-new`}
            checked={checked}
          />
          <label
            onClick={(e) => toggleChecked(theme)}
            className={`react-switch-label ${classes.themeToggleWrapper}`}
            htmlFor={`react-switch-new`}
          >
            <span className="react-switch-button">
              <img
                src={checked ? daymode : nightmode}
                alt="theme mode logo"
                className={classes.themeToggleIcon}
              />
            </span>
          </label>
        </>
      )}
    </ThemeConsumer>
  );
};

export default withTheme(ToggleMode);
