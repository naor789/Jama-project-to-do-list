import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  TextField,
  FormGroup,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import coffee from "../images/coffee.jpg";

import "../App.css";
import { database } from "./firebase";
import NavBar from "./NavBar";

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
    height: 500,
    borderRadius: 15,
  },
  text: {
    fontFamily: "RocknRoll One, sans-serif",
  },
  image: {
    maxWidth: 600,
    height: 250,
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
    database
      .collection("tasks")
      .add({
        title: title,
        task: task,
        priorities: priorities,
        deadline: deadline,
        date: Date.now(),
        isDone: false,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        history.push("/tasklist");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <>
      <div className="container">
        <NavBar></NavBar>
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
                className={classes.image}
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
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Priority
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
      </div>
    </>
  );
}
