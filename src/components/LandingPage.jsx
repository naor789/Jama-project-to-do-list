
import React from "react";
import { Grid } from "@material-ui/core";
import cupcake from "../images/cupcake.jpg";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import { useHistory } from "react-router-dom";


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



export default function LandingPage() {
    const classes = useStyles();
      const history = useHistory();


    function HomeIcon(props) {
      return (
        <SvgIcon {...props}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
      );
    }

      const handleOnClick = () => {
        history.push("/landingpage");
      };


    return (
      <>
        <Grid container direction="col" justify="center" alignItems="center">
          <h1>Welcom </h1>{" "}
        </Grid>
        <Grid container direction="col" justify="center" alignItems="center">
          <img src={cupcake} alt="cupcake" className={classes.image} />
        </Grid>
      </>
    );
}

