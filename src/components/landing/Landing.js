import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "./LandingStyles";
import Lottie from "react-lottie";
import animation from "./animation.json";
import { Link } from "react-router-dom";

import {
  StyledTypography,
  StyledGrid,
  StyledStartedButton,
} from "../../toggle/StyledComponents";

const Landing = () => {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <StyledGrid container lg={12} md={12} style={{ paddingTop: "3%" }}>
        <Grid item lg={12} md={12}>
          <Grid container justify="center" style={{ textAlign: "center" }}>
            <Grid item lg={12} md={12}>
              <StyledTypography className={classes.text} variant="h3">
                Oof, just Tasks.
              </StyledTypography>
            </Grid>
          </Grid>
          <Grid container justify="center" lg={12} md={12}>
            <Grid item lg={6} md={6}>
              <Lottie
                // className={classes.lottie}
                style={{ height: "50vh", width: "100%" }}
                options={defaultOptions}
              />
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            lg={12}
            md={12}
            style={{ paddingTop: "1%" }}
          >
            <Grid item lg={2} md={2} justify="center">
              <Link to="/todo">
                <StyledStartedButton className={classes.btn}>
                  <StyledTypography>Get Started</StyledTypography>
                </StyledStartedButton>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </StyledGrid>
    </>
  );
};

export default Landing;
