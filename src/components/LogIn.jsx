import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { makeStyles } from "@material-ui/core/styles";
import { auth } from "./firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import Home from "./Home";
import { database } from "./firebase";

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

export default function LogIn() {
  const classes = useStyles();
  const history = useHistory();
  const [user] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState([]);
  const [name, setName] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn({ isSignedIn: !!user });
      setName(user.displayName);
      database
        .collection("users")
        .add({
          userName: user.displayName,
          email: user.email,
          createdAt: Date.now(),
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    });
  }, []);

  return (
    <div>
      {isSignedIn.isSignedIn ? (
        <Home user={name} isSignedIn={isSignedIn}></Home>
      ) : (
        <Grid container direction="row" justify="center" alignItems="flex-end">
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Grid>
      )}
    </div>
  );
}
