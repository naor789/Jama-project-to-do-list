import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  TextField,
  FormGroup,
  Switch,
  FormControlLabel,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  ThemeProvider,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import coffee from "../images/coffee.jpg";
import "../App.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { database } from "./firebase";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 600,
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// });

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginTop: 8,
  },
  root: {
    width: 600,
    height: 400,
    // maxWidth: 600,
  },
  text: {
    fontFamily: "RocknRoll One, sans-serif",
  },
}));

export default function ToDoForm() {
  const history = useHistory();
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [priorities, setPriorities] = useState();
  const [deadline, setDeadline] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const start = Date.now();
    // const date = { currentTime: new Date().toLocaleString() };

    // const newTask = {
    //   title: title,
    //   task: task,
    //   priorities: priorities,
    //   deadline: deadline,
    // };
    database
      .collection("tasks")
      .add({
        title: title,
        task: task,
        priorities: priorities,
        deadline: deadline,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    console.log("new task");
    setTitle("");
    setTask("");
    setPriorities("");
    setDeadline("");
    history.push("/tasklist");
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="container"
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="coffee"
              height="140"
              image={coffee}
              title="coffee"
            />
            <CardContent>
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
              <FormGroup row>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Choose priority
                  </InputLabel>
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

                <form className={classes.container} noValidate>
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
                </form>
              </FormGroup>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className="container"
            >
              <Button variant="contained" onClick={handleSubmit}>
                Save
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
