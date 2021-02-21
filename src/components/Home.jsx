import React from "react";
import { BrowserRouter as Router, Switch, Route , Link} from "react-router-dom";
import "../App.css";
import TasksList from "./TaskList";
import ToDoForm from "../components/ToDoForm";
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Toolbar,
  Typography,
  AppBar,
} from "@material-ui/core";
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

export default function Home() {
  const classes = useStyles();
  const history = useHistory();

  const handleOnClick = () => {
  history.push("/landingpage");
  }
  
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
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route path="/todoform">
              <ToDoForm></ToDoForm>
            </Route>
            <Route path="/tasklist">
              <TasksList></TasksList>
            </Route>
            <Route path="/landingpage">
              <LandingPage></LandingPage>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}
