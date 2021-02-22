import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import cupcake from "../images/cupcake.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 50,
    backgroundColor: "#388e3c",
  },
  homeIcon: {
    marginRight: theme.spacing(2),
  },
  nav: {
    backgroundColor: "#388e3c",
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    fontFamily: "RocknRoll One, sans-serif",
    fontSize: 40,
  },
  image: {
    maxWidth: 600,
    borderRadius: 15,
  },
  h1: {
    position: "relative",
    top: 238,
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  useEffect(() => {
    setName(props.name);
  }, []);

  return (
    <>
      <Grid
        container
        direction="col"
        justify="center"
        alignItems="center"
        className={classes.h1}
      >
        <Grid>
          <h1 className={classes.title}>Welcom {name ? name : "user"}</h1>
        </Grid>
        <Grid container direction="col" justify="center" alignItems="center">
          <div>"Either you run the day , or the day runs you" </div>
          <div>- Jim Rohn</div>
        </Grid>
      </Grid>
      <Grid container direction="col" justify="center" alignItems="center">
        <img src={cupcake} alt="cupcake" className={classes.image} />
      </Grid>
    </>
  );
}
