import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import TasksList from "./TaskList";
import ToDoForm from "../components/ToDoForm";
import LandingPage from "./LandingPage";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Toolbar, Typography, AppBar } from "@material-ui/core";
import "firebase/auth";
import "firebase/firestore";
import SvgIcon from "@material-ui/core/SvgIcon";
// import LogIn from "../components/LogIn";
// import SignUp from "../components/SignUp";
import { AuthProvider } from "../context/AuthContext";
import firebase from "firebase/app";

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

export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();

  const handleOnClick = () => {
    history.push("/landingpage");
  };

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
          <div className={classes.root}>
            <AppBar position="static" className={classes.nav}>
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.homeIcon}
                  color="inherit"
                  aria-label="Home"
                  onClick={handleOnClick}
                >
                  <HomeIcon fontSize="large" />
                </IconButton>
                <Typography variant="h6">
                  <Link to="/todoform" className={classes.title}>
                    Add Task
                  </Link>{" "}
                  <Link to="/tasklist" className={classes.title}>
                    To Do List
                  </Link>
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
      </div>
    </>
  );
}
