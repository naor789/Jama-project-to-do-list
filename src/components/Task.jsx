import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  ButtonBase,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import importanttt from "../images/importanttt.jpg";
import snooze from "../images/snooze.jpg";
import DeleteIcon from "@material-ui/icons/Delete";
import { database } from "./firebase";

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
  date: {
    fontSize: 13,
  },
}));

export default function Task(props) {
  const classes = useStyles();
  const { title, task, priorities, deadline, date , id } = props.task;

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
      <Paper className={classes.paper}>
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
        <Grid container spacing={2}>
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
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.text}
                >
                  Task title: {title}
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.text}
                >
                  Task: {task}
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.text}
                >
                  Deadline: {deadline}
                </Typography>
              </Grid>
              <Grid container justify="flex-end" alignItems="flex-end">
                <Button
                  className={classes.button}
                  style={{ cursor: "pointer" }}
                >
                  Done
                </Button>
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
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
