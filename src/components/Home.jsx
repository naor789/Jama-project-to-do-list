import React, { useEffect, useState } from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "firebase/auth";
import "firebase/firestore";
import SvgIcon from "@material-ui/core/SvgIcon";
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";

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
}));

export default function Home(props) {
  const [log, setLog] = useState();
  const displayName = props.user;
  const isSignedIn = props.isSignedIn;
  const classes = useStyles();
  const history = useHistory();

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  return (
    <>
      <div className="container">
        <NavBar isSignedIn={isSignedIn}></NavBar>
        <LandingPage name={displayName}></LandingPage>
      </div>
    </>
  );
}
