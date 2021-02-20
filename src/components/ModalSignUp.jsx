import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
// import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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

export default function ModalSignUp() {
      const classes = useStyles();
    const { signup, currentUser } = useAuth();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [modalSignUp, setModalSignUp] = useState(false);
  const history = useHistory();
//   const { setCurrentUser, baseURL } = useContext(UserContext);

  const openModalSignUp = () => setModalSignUp(true);

  const handleClose = () => setModalSignUp(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const response = await axios.post(`${baseURL}/api/user/register`, {
    //   email: email,
    //   password: password,
    //   confirmPassword: confirmPassword,
    //   firstName: firstName,
    //   lastName: lastName,
    //   phoneNumber: phoneNumber,
    // });
    // const logIn = await axios.post(`${baseURL}/api/user/login`, {
    //   email: email,
    //   password: password,
    // });
    // if (logIn.status === 200) {
    //   localStorage.setItem("token", response.data);
    //   setCurrentUser(logIn.data);
    //   localStorage.setItem("user", JSON.stringify(logIn.data));
    // }
    // setPhoneNumber("");
    // setFirstName("");
    // setLastName("");
    // setPassword("");
    // setConfirmPassword("");
    // setEmail("");
    // setModalSignUp(false);
    history.push("/");
  };

  return (
    <>
      {/* <Button
        className="btn btn-secondary my-2 my-sm-0 mr-4"
        type="button"
        onClick={openModalSignUp}
      >
        Sign Up{" "}
      </Button> */}

          <modal show={modalSignUp} onHide={handleClose}>
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
          <Modal.Title>Sign Up</Modal.Title>
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
            </Form.Group>
            <Form.Group id="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                required
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </Form.Group>
            <Form.Group id="firsName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="email"
                value={firstName}
                required
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Form.Group>
            <Form.Group id="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="email"
                value={lastName}
                required
                onChange={(event) => setLastName(event.target.value)}
              />
            </Form.Group>
            <Form.Group id="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="email"
                value={phoneNumber}
                required
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </Form.Group> */}
            <Button onClick={handleSubmit} className="w-100 mt-3" type="button">
              Sign Up{" "}
            </Button>
          {/* </Form>
        </Modal.Body> */}
      </modal>
    </>
  );
}
