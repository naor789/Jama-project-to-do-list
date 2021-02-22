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
    marginLeft: 45,
    textDecoration: "none",
    color: "white",
    fontFamily: "RocknRoll One, sans-serif",
  },
  image: {
    maxWidth: 600,
    borderRadius: 15,
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
      <Grid container direction="col" justify="center" alignItems="center">
        <h1>Welcom {name ? name : "user"}</h1>
          </Grid>
           <Grid container direction="col" justify="center" alignItems="center">
      <div>"Either you run the day , or the day runs you" </div>
      <div>- Jim Rohn</div>
</Grid>
      <Grid container direction="col" justify="center" alignItems="center">
        <img src={cupcake} alt="cupcake" className={classes.image} />
      </Grid>
    </>
  );
}
