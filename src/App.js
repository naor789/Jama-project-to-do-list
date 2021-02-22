import React, { useState, useEffect, useContext } from "react";
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import 'firebase/auth'
import 'firebase/firestore'
import ToDoForm from "./components/ToDoForm";
import TasksList from "./components/TaskList";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import AuthProvider from "./context/AuthContext";


export default function App() {

  return (
    <AuthProvider>
      <Router>
        {/* <NavBar></NavBar> */}
        <div className="container">
          <Switch>
            <Route exact path="/" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={Home} />
            {/* <Route exact path="/">
                      <LogIn></LogIn>
                    </Route> */}
            <Route path="/todoform">
              <ToDoForm></ToDoForm>
            </Route>
            <Route path="/tasklist">
              <TasksList></TasksList>
            </Route>
            <Route path="/landingpage">
              <LandingPage></LandingPage>
            </Route>
          </Switch>


        </div>
      </Router>
    </AuthProvider>
  );
}

