import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
// import axios from "axios";
import {
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { database } from "./firebase";
import { auth, provider } from "./firebase";
import { useAuth } from "../context/AuthContext";

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

export default function SignUp() {
  const classes = useStyles();
  // const { login, currentUser } = useAuth();

  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const history = useHistory();
  //   const { setCurrentUser, baseURL } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    database
      .collection("users")
      .add({
        email: email,
        password: password,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    console.log("userr");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
    // history.push("/home");
  };

  return (
    <Grid container direction="column" justify="flex-start" alignItems="center">
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid container direction="row" justify="center" alignItems="center">
            <div>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <h1>Sign up</h1>
              </Grid>
              <div>
                <TextField
                  label="Email"
                  id="outlined-size-normal"
                  //   defaultValue="Normal"
                  variant="outlined"
                  className={classes.textField}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <TextField
                  label="Password"
                  id="outlined-size-normal"
                  //   defaultValue="Normal"
                  variant="outlined"
                  className={classes.textField}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div>
                <TextField
                  label="Confirm Password"
                  id="outlined-size-normal"
                  //   defaultValue="Normal"
                  variant="outlined"
                  className={classes.textField}
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>
            </div>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button variant="contained" onClick={handleSubmit} type="button">
              Sign up{" "}
            </Button>
          </Grid>
          <Grid container direction="col" justify="center" alignItems="center">
            <div>
              <Link className={classes.link} to={"/"}>
                Log In{" "}
              </Link>
            </div>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}
