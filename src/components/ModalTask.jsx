import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  FormControl,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  Modal,
} from "@material-ui/core";
import firebase from "firebase";
import { database } from "./firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  text: {
    fontFamily: "RocknRoll One, sans-serif",
  },
  image: {
    width: 135,
    height: 135,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  button: {
    backgroundColor: "#586A7C",
    color: "#fff",
    fontFamily: "RocknRoll One, sans-serif",
    marginRight: 10,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  modal: {
    margin: 50,
  },
  paper: {
    padding: 15,
    margin: "auto",
    maxWidth: 600,
    fontFamily: "RocknRoll One, sans-serif",
  },
  save: {
    backgroundColor: "#586A7C",
    color: "#fff",
    fontFamily: "RocknRoll One, sans-serif",
    marginTop: 15,
    marginLeft: 10,
  },
}));

export default function ModalTask(props) {
  const classes = useStyles();
  const { id } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [priorities, setPriorities] = useState();
  const [deadline, setDeadline] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
    setTitle(props.task.title);
    setTask(props.task.task);
    setPriorities(props.task.priorities);
    setDeadline(props.task.deadline);
  };

  const handleClose = () => setModalIsOpen(false);

  const handleEditTask = (event) => {
    event.preventDefault();
    const updateRef = firebase.firestore().collection("tasks").doc(id);
    updateRef
      .set({
        title: title,
        task: task,
        priorities: priorities,
        deadline: deadline,
        date: Date.now(),
      })
      .then(() => {
        setTitle("");
        setTask("");
        setPriorities();
        setDeadline("");
        setModalIsOpen(false);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const body = (
    <Paper className={classes.paper}>
      <Button onClick={handleClose}>X </Button>

      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid
              item
              xs
              direction="row"
              justify="center"
              alignItems="center"
              className="container"
            >
              <FormGroup>
                <TextField
                  id="standard-basic"
                  label="Title"
                  className={classes.text}
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  id="standard-basic"
                  label="Add Task"
                  className={classes.text}
                  value={task}
                  onChange={(event) => setTask(event.target.value)}
                />
              </FormGroup>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                  labelId="choose priority "
                  id="demo-simple-select"
                  className={classes.text}
                  value={priorities}
                  onChange={(event) => setPriorities(event.target.value)}
                >
                  <MenuItem value={1}>Important</MenuItem>
                  <MenuItem value={2}>Snoozed</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="date"
                label="Deadline"
                type="date"
                defaultValue="2021-02-21"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                value={deadline}
                onChange={(event) => setDeadline(event.target.value)}
              />
            </Grid>

            <Grid
              container
              direction="column"
              justify="center"
              alignItems="stretch"
            >
              <Button
                color="primary"
                className={classes.save}
                onClick={handleEditTask}
                color="primary"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        type="button"
        onClick={openModal}
      >
        Edit Task
      </Button>
      <Modal open={modalIsOpen} onClose={handleClose} className={classes.modal}>
        {body}
      </Modal>
    </div>
  );
}
