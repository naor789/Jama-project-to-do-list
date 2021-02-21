import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  ButtonBase,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import important from "../images/important.jpg";
import snooze from "../images/snooze.jpg";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    fontFamily: "RocknRoll One, sans-serif",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  text: {
    fontFamily: "RocknRoll One, sans-serif",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  button: {
    backgroundColor: "#ffb74d",
    fontFamily: "RocknRoll One, sans-serif",
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
                <img className={classes.img} alt="important" src={important} />
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
