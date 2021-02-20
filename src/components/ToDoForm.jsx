import React, { useState } from "react";
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
  FormControl
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import coffee from "../images/coffee.jpg"
import "../App.css";
import { createMuiTheme } from "@material-ui/core/styles";


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
    maxWidth: 600,
  },
}));


export default function ToDoForm() {
  const classes = useStyles();
  // const [state, setState] = useState({
  //   checkedA: false,
  //   checkedB: false,
  //   checkedC: false,
  // });

  const [priorities, setPriorities]= useState()

  
  // const theme = createMuiTheme({
  //   palette: {
  //     Secondary: {
  //       // main: "#dc004e",
  //       dark: "#9a0036",
  //     },
  //     Warning: {
  //       light: "#ffb74d",
  //     },
  //   },
  // });


  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

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
                <TextField id="standard-basic" label="Title" />
              </FormGroup>
              <FormGroup>
                <TextField id="standard-basic" label="Add Task" />
              </FormGroup>
              <FormGroup row>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={priorities}
                    // onChange={handleChange}
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
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
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
              <Button variant="contained">Save</Button>
              </Grid>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
