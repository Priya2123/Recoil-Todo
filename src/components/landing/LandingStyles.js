import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  btn: {
    color: "#fff",
    border: "1px solid #fff",
    cursor: "pointer",
    padding: "10px 35px",
  },
  lottie: {
    height: "45vh",
    // width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
}));
