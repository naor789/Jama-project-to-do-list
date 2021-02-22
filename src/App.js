import React from "react";
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from './components/LogIn';
import 'firebase/auth'
import 'firebase/firestore'
import ToDoForm from "./components/ToDoForm";
import TasksList from "./components/TaskList";
import AuthProvider from "./context/AuthContext";


export default function App() {

  return (
    <AuthProvider>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={LogIn} />
            <Route path="/home" component={Home} />
            <Route path="/todoform">
              <ToDoForm></ToDoForm>
            </Route>
            <Route path="/tasklist">
              <TasksList></TasksList>
            </Route>
          </Switch>

        </div>
      </Router>
    </AuthProvider>
  );
}

