import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  ButtonBase,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import importanttt from "../images/importanttt.jpg";
import snooze from "../images/snooze.jpg";
import DeleteIcon from "@material-ui/icons/Delete";



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
}));

export default function Task(props) {
  const classes = useStyles();
  const { title, task, priorities, deadline } = props.task;

  return (
    <div className={classes.root}>
      {priorities === 1 ? (
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="important" src={importanttt} />
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
                <Grid
                  container
                  // direction="row"
                  justify="flex-end"
                  alignItems="flex-end"
                >
                  <Button
                    // variant="contained"
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
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" className={classes.text}>
                  {" "}
                  time:
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="snooze" src={snooze} />
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
                <Grid
                  container
                  // direction="row"
                  justify="flex-end"
                  alignItems="flex-end"
                >
                  <Button
                    // variant="contained"
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
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" className={classes.text}>
                  {" "}
                  time:
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      )}
    </div>
  );
}
