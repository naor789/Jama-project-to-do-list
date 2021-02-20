import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
// import axios from "axios";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { auth, provider } from "./firebase";
import { useAuth } from "../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

// import { UserContext } from "../context/UserContext";

export default function ModalLogIn() {
  const classes = useStyles();
  const { login, currentUser } = useAuth();

  const [modalLogIn, setModalLogIn] = useState(false);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const history = useHistory();
  //   const { setCurrentUser, baseURL } = useContext(UserContext);

  const openModalLogIn = () => setModalLogIn(true);

  const handleClose = () => setModalLogIn(false);

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
    history.push("/");
  };

  return (
    <>
      {/* <Button
        className="btn btn-secondary my-2 my-sm-0 mx-3"
        type="button"
        onClick={openModalLogIn}
      >
        {" "}
        Log In{" "}
      </Button> */}

      <modal show={modalLogIn} onHide={handleClose}>
        <form className={classes.root} noValidate autoComplete="off">
          <h1>Log In</h1>
          <div>
            <TextField
              label="Email"
              id="outlined-size-normal"
              //   defaultValue="Normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              label="Password"
              id="outlined-size-normal"
              //   defaultValue="Normal"
              variant="outlined"
            />
          </div>
        </form>

        {/* <Modal.Header>
          <Modal.Title>Log In</Modal.Title>
          <Button variant="light" onClick={handleClose} type="button">
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group> */}
        <Button onClick={handleSubmit} className="w-100 mt-3" type="button">
          Log In{" "}
        </Button>
        {/* </Form>
        </Modal.Body> */}
      </modal>
    </>
  );
}
