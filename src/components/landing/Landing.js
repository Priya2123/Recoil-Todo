import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./LandingStyles";
import Lottie from "react-lottie";
import animation from "./animation.json";

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
      <Grid container lg={12} md={12} style={{ marginTop: "5%" }}>
        <Grid item lg={12} md={12}>
          <Grid container justify="center" style={{ textAlign: "center" }}>
            <Grid item lg={12} md={12}>
              <Typography className={classes.text} variant="h3">
                Oof, just Tasks.
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="center" lg={12} md={12}>
            <Grid item lg={12} md={12}>
              <Lottie
                //   style={{ height: "100%" }}
                options={defaultOptions}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Landing;
