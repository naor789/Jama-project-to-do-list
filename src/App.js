import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ToDoForm from './components/ToDoForm';




function App() {

  return (
    <div className="all-container container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home ></Home>
          </Route>
          <Route exact path="/todoform">
            <ToDoForm ></ToDoForm>
          </Route>
</Switch>
        </Router>
    </div>
  );
}

export default App;
