import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

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
    width: "100%",
    "&:hover": {
      textDecoration: "underline",
      // borderBottom: "1px solid #fff",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <img
            style={{ height: "9%", width: "9%", zIndex: "101" }}
            src="https://cdni.iconscout.com/illustration/premium/thumb/man-studying-research-paper-2407302-2012369.png"
            alt=""
          />
          <Typography variant="h5" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span
                style={{
                  color: "#61dafb",
                  fontWeight: "bold",
                  marginLeft: "1%",
                }}
              >
                PDF
              </span>{" "}
              <span style={{ color: "white" }}>FINDER</span>
              <br />
            </Link>
            <Typography
              //   variant="caption"
              style={{ fontSize: "10px", zIndex: "101" }}
              className={classes.title}
            >
              BUILT WITH {`<3`} BY @OLDMONKS
            </Typography>
          </Typography>
          <Link to="/" className={classes.link}>
            {" "}
            <Button color="inherit" className={classes.button}>
              Home
            </Button>
          </Link>
          <Link to="/gettingStarted">
            <Button
              color="inherit"
              className={classes.button}
              style={{ marginLeft: "1%", zIndex: "101" }}
            >
              Start
            </Button>
          </Link>
          <Link to="/about">
            {" "}
            <Button
              color="inherit"
              className={classes.button}
              style={{ marginLeft: "1%", zIndex: "101" }}
            >
              About Us
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
