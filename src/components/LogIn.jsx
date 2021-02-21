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
import { app , auth} from "./firebase";
import { useAuth } from "../context/AuthContext";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import firebaseui from "firebaseui";
import Home from "./Home";
import { AuthContext } from "../context/AuthContext";


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
  }
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

  const [isSignedIn, setIsSignedIn] = useState({
    isSignedIn: false,
  });
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // callbacks: {
    //   signInSuccess: () => false
    // }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn({ isSignedIn: !!user });
            // setCurrentUser(user);
      console.log("user", user);
    });
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();

    // const logIn = await axios.post(`${baseURL}/api/user/login`, {
    //   email: email,
    //   password: password,
    // });
    // if (logIn.status === 200) {
    //   localStorage.setItem("token", JSON.stringify(logIn.data));
    //   setCurrentUser(logIn.data);
    // }
    // setPassword("");
    // setEmail("");
    // setModalLogIn(false);
    history.push("/home");
  };

  // const signInWithGoogle = () => {
  //   auth.signInWithPopup(provider);
  //   {
  //     currentUser ? history.push("/") : history.push("/Home");
  //   }
  // };

  return (
    <div>
      {isSignedIn.isSignedIn ? (
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
                  {/* <Grid
                container
                direction="col"
                justify="center"
                alignItems="center"
              >
                <h1>Log In</h1>
              </Grid>
              <div>
                <TextField
                  label="Email"
                  id="outlined-size-normal"
                  //   defaultValue="Normal"
                  variant="outlined"
                  className={classes.textField}
                />
              </div>
              <div>
                <TextField
                  label="Password"
                  id="outlined-size-normal"
                  //   defaultValue="Normal"
                  variant="outlined"
                  className={classes.textField}
                />
              </div>
              <Grid
                container
                direction="col"
                justify="center"
                alignItems="center"
              >
                <Button onClick={handleSubmit} type="button">
                  Log In{" "}
                </Button>
              </Grid> */}
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

              {/* <Grid container direction="row" justify="center" alignItems="center">
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </Grid> */}
            </CardActions>
            {/* <Grid container direction="col" justify="center" alignItems="center">
          <div>
            <Link className={classes.link} to={"/signup"}>
              Sign Up
            </Link>
          </div>
        </Grid> */}
          </Card>
        </Grid>
      ) : (
        <Home></Home>
      )}
    </div>
  );
}
