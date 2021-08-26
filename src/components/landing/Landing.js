import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./LandingStyles";

const Landing = () => {
  const classes = useStyles();
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
        </Grid>
      </Grid>
    </>
  );
};

export default Landing;
