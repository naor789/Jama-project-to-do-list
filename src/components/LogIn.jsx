import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
// import axios from "axios";
import {
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { app, auth } from "./firebase";
import { useAuth } from "../context/AuthContext";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import firebaseui from "firebaseui";
import Home from "./Home";
import { AuthContext } from "../context/AuthContext";
import { userInfo } from "os";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    marginTop: 50,
    borderRadius: 15,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    margin: 15,
  },
  link: {
    textDecoration: "none",
    color: "#1976d2",
  },
});

// firebase.initializeApp({
//   apiKey: "AIzaSyCyHntjzxnknCzqAN4qawQHUcZQfgIMiFE",
//   authDomain: "fir-auth-tutorial-ed11f.firebaseapp.com",
// });

export default function LogIn() {
  const classes = useStyles();
  // const [currentUser, setCurrentUser] = useContext(AuthContext);

  // const { app } = useAuth();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const history = useHistory();
  const [user] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState([]);
  const [name, setName] = useState("");
  // const [isSignedIn, setIsSignedIn] = useState({
  //   isSignedIn: false,
  // });
  const [isSignedIn, setIsSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    // firebase.auth().setPersistence.then( )
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn({ isSignedIn: !!user });
      console.log("hi", firebase.auth().currentUser.displayName);
      setName(firebase.auth().currentUser.displayName);
      // console.log("hhhhhhhhhhhhhh", firebase.auth().currentUser);
      // currentUser.push(firebase.auth().currentUser);

      // setCurrentUser(firebase.auth().currentUser);

      console.log(currentUser, "yhgjygdgdhfd");
      // history.push("/home");
      // window.location.reload();
    });
  }, []);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   history.push("/home");
  // };

  return (
    <div>
      {isSignedIn ? (
        <div>
          <Home user={name} isSignedIn={isSignedIn}>
            {" "}
          </Home>
          {/* <h1>{firebase.auth().currentUser.displayName}</h1> */}
        </div>
      ) : (
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Grid
                container
                direction="col"
                justify="center"
                alignItems="center"
              >
                <div>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <StyledFirebaseAuth
                      uiConfig={uiConfig}
                      firebaseAuth={firebase.auth()}
                    />
                  </Grid>
                </div>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid
                container
                direction="col"
                justify="center"
                alignItems="center"
              >
                <div>
                  <Link className={classes.link} to={"/signup"}>
                    Sign Up
                  </Link>
                </div>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        // <div>
        //   <Home user={name}></Home>
        //   {/* <h1>{firebase.auth().currentUser.displayName}</h1> */}
        // </div>
      )}
    </div>
  );
}
