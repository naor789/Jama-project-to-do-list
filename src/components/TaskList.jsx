import React, { useState, useEffect } from "react";
import Task from "./Task";
import { TaskContext } from "../context/TaskContext";
import { database, app } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { makeStyles } from "@material-ui/core/styles";
import { GridList, GridListTile } from "@material-ui/core";


export default function TasksList() {
  const [tasksList, setTasksList] = useState([]);


    useEffect(() => {
    const loadUserData = database
      .collection("tasks")
      .onSnapshot((querySnapshot) => {
          const task = [];
        querySnapshot.forEach((doc) => {
          task.push(Object.assign(doc.data(), { id: doc.id }));
        });
        setTasksList(task);
      });
    return () => {
    loadUserData();
    };
  }, []);

  return (
    <div
    >
        {tasksList.map((task) => (
            <Task key={task.id} task={task} />
        ))}
    </div>

  );
}
