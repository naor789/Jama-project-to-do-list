import React from "react";
import { BrowserRouter as Router, Switch, Route , Link} from "react-router-dom";
import "../App.css";
import TasksList from "./TaskList";
import ToDoForm from "../components/ToDoForm";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Toolbar,
  Typography,
  AppBar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import { AuthProvider } from "../context/AuthContext";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 50,
    backgroundColor: "#388e3c",
  },
  menuButton: {
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

export default function Home() {
  const classes = useStyles();


  return (
    <>
      <div className="container">
        <Router>
          <div className={classes.root}>
            <AppBar position="static" className={classes.nav} >
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
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
          <Switch>
            <Route path="/todoform">
              <ToDoForm></ToDoForm>
            </Route>
            <Route path="/tasklist">
              <TasksList></TasksList>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}
