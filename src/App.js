import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ToDoForm from './components/ToDoForm';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ModalLogIn from './components/ModalLogIn';
import ModalSignUp from './components/ModalSignUp';
// import { AuthProvider } from './context/AuthContext';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import Task from './components/Task';
import TasksList from './components/TaskList';

export const baseUrl = "http://localhost:5000"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 50,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
  const classes = useStyles();


  return (
    // <AuthProvider>
    <div className="container">
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                News
          </Typography>
                <Link to="/login">
                  Log In
      </Link>
                  <Link to="/signup">
                    Log In
      </Link>

            </Toolbar>
          </AppBar>
        </div>
            <Switch>
              <Route exact path="/">
                <Home ></Home>
              </Route>
              <Route exact path="/todoform">
                <ToDoForm ></ToDoForm>
              </Route>
              <Route exact path="/login">
                <ModalLogIn ></ModalLogIn>
              </Route>
              <Route exact path="/signup">
                <ModalSignUp ></ModalSignUp>
              </Route>
          <Route exact path="/tasklist">
            <TasksList ></TasksList>
          </Route>

            </Switch>
        </Router>
        </div>
    // </AuthProvider>
  );
}

export default App;
