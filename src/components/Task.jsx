import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonBase, Grid, Paper, Typography } from "@material-ui/core";
import importanttt from "../images/importanttt.jpg";
import snooze from "../images/snooze.jpg";
import DeleteIcon from "@material-ui/icons/Delete";
import { database } from "./firebase";
import firebase from "firebase";
import { Modal } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import ModalTask from "./ModalTask";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 550,
    fontFamily: "RocknRoll One, sans-serif",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 15,
  },
  paperDone: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 550,
    fontFamily: "RocknRoll One, sans-serif",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 15,
    opacity: 0.5,
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
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#586A7C",
    color: "#fff",
    fontFamily: "RocknRoll One, sans-serif",
    marginRight: 10,
  },
  date: {
    fontSize: 13,
    borderBottom: "1px solid black",
  },
}));

export default function Task(props) {
  const classes = useStyles();
  const { title, task, priorities, deadline, date, id, isDone } = props.task;

  const handleDoneTask = () => {
    if (!isDone) {
      const updateRef = firebase.firestore().collection("tasks").doc(id);
      updateRef
        .set({
          title: title,
          task: task,
          priorities: priorities,
          deadline: deadline,
          date: Date.now(),
          isDone: true,
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    } else {
      const updateRef = firebase.firestore().collection("tasks").doc(id);
      updateRef
        .set({
          title: title,
          task: task,
          priorities: priorities,
          deadline: deadline,
          date: Date.now(),
          isDone: false,
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  };

  const deleteTask = () => {
    database
      .collection("tasks")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div className={classes.root}>
      <Paper className={isDone ? classes.paperDone : classes.paper}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="container"
        >
          <Typography variant="subtitle1" className={classes.date}>
            {" "}
            {new Date(date).toString()}
          </Typography>
        </Grid>
        {/* <Grid container spacing={2}> */}
        {/* <Grid item>
            <ButtonBase className={classes.image}>
              {priorities === 1 ? (
                <img
                  className={classes.img}
                  alt="important"
                  src={importanttt}
                />
              ) : (
                <img className={classes.img} alt="snooze" src={snooze} />
              )}
            </ButtonBase>
          </Grid> */}
        <Grid item xs={12} sm container>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid
            // item
            // xs
            // direction="row"
            // justify="center"
            // alignItems="center"
            // className="container"
            >
              <Typography
                gutterBottom
                variant="subtitle1"
                className={classes.text}
              >
                Task title: {title}
              </Typography>
              <Typography variant="body2" gutterBottom className={classes.text}>
                Task: {task}
              </Typography>
              <Typography variant="body2" gutterBottom className={classes.text}>
                Deadline: {deadline}
              </Typography>
            </Grid>
            <Grid item>
              <ButtonBase className={classes.image}>
                {priorities === 1 ? (
                  <img
                    className={classes.img}
                    alt="important"
                    src={importanttt}
                  />
                ) : (
                  <img className={classes.img} alt="snooze" src={snooze} />
                )}
              </ButtonBase>
            </Grid>
          </Grid>
          {/* </Grid> */}
          <Grid container justify="space-around">
            <Button
              className={classes.button}
              onClick={handleDoneTask}
              // style={{ cursor: "pointer" }}
            >
              {isDone ? "Undo" : "Done"}
            </Button>
            {/* <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  // onClick={handleEdit}
                >
                  Edit Task
                </Button> */}
            <ModalTask task={props.task}></ModalTask>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={deleteTask}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
