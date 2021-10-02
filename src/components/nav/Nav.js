import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  StyledNav,
  StyledTypography,
  StyledButton,
} from "../../toggle/StyledComponents";
import { createGlobalStyle, ThemeConsumer, withTheme } from "styled-components";
import ToggleMode from "../../toggle/ToggleMode";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    height: "15vh",
  },
  nav: {
    paddingTop: "1%",
    paddingBottom: "0.5%",
    backgroundColor: "transparent",
    // position: "fixed",
    fontFamily: "Montserrat, tahoma, verdana, sans-serif",
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    zIndex: "101",
  },
  button: {
    textDecoration: "none",
    color: "white",
    zIndex: "101",
    // width: "100%",
    "&:hover": {
      textDecoration: "underline",
      // borderBottom: "1px solid #fff",
    },
  },
}));

const Nav = (props) => {
  const classes = useStyles();
  const { logout } = props;

  return (
    <StyledNav className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <ThemeConsumer>
            {(theme) => (
              <>
                {theme.mode === "dark" ? (
                  <img
                    style={{ height: "6%", width: "7%", zIndex: "101" }}
                    src="https://th.bing.com/th/id/R.071eb10e44fa89c7e13c389f27346a72?rik=%2bf2dhQxiHmQyoQ&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fx%2fn%2f7%2fm%2fp%2fg%2fcheck-mark-in-white-hi.png&ehk=6WPax6dqWQjs4ZJLqZymZNiQu5TZnlJO7jqRA3O4aDo%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                ) : (
                  <img
                    src="https://i.pinimg.com/originals/68/a3/1e/68a31e355c12f4a77fb8f82bb900597f.png"
                    alt="header"
                    style={{ height: "6%", width: "7%", zIndex: "101" }}
                  />
                )}
              </>
            )}
          </ThemeConsumer>
          {/* <img
            style={{ height: "6%", width: "7%", zIndex: "101" }}
            src="https://th.bing.com/th/id/R.071eb10e44fa89c7e13c389f27346a72?rik=%2bf2dhQxiHmQyoQ&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fx%2fn%2f7%2fm%2fp%2fg%2fcheck-mark-in-white-hi.png&ehk=6WPax6dqWQjs4ZJLqZymZNiQu5TZnlJO7jqRA3O4aDo%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          /> */}
          <StyledTypography variant="h4" className={classes.title}>
            {/* <Link to="/" style={{ textDecoration: "none" }}> */}
            <span
              style={{
                // color: "#fff",
                fontWeight: "bold",
                marginLeft: "1%",
              }}
            >
              To-do
            </span>{" "}
            <br />
            {/* </Link> */}
            <StyledTypography
              //   variant="caption"
              style={{ fontSize: "10px", zIndex: "101" }}
              className={classes.title}
            >
              BUILT WITH {`<3`} BY @PRIYA
            </StyledTypography>
          </StyledTypography>
          <Link to="/" className={classes.link}>
            {" "}
            <StyledButton color="inherit" className={classes.button}>
              <StyledTypography>Home</StyledTypography>
            </StyledButton>
          </Link>
          <Link to="/profile" className={classes.link}>
            {" "}
            <StyledButton color="inherit" className={classes.button}>
              <StyledTypography>Profile</StyledTypography>
            </StyledButton>
          </Link>
          <Link to="/login">
            <StyledButton
              onClick={logout}
              color="inherit"
              className={classes.button}
              style={{ marginLeft: "1%", zIndex: "101", width: "100%" }}
            >
              <StyledTypography>Log Out</StyledTypography>
            </StyledButton>
          </Link>
          <ToggleMode />
        </Toolbar>
      </AppBar>
    </StyledNav>
  );
};

export default withTheme(Nav);
