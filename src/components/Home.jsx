import React, { useContext } from "react";
import ToDoForm from "./ToDoForm";
import { Button } from "@material-ui/core";
import "./home.css";
import "../App.css";



export default function Home() {

  return (
    <>
      <div className="container"> 
        <h1 className="welcome">Welcome </h1>
        <Button variant="contained">Default</Button>{" "}
        <Button variant="contained">Default</Button>
      </div>
    </>
  );
}
