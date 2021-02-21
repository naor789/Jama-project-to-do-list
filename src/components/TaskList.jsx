import React, { useState, useEffect } from "react";
import Task from "./Task";
import { database, app } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Grid } from "@material-ui/core";

export default function TasksList() {
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    const loadUserData = database
      .collection("tasks")
      .onSnapshot((querySnapshot) => {
        console.log(querySnapshot);
        const task = [];
        querySnapshot.forEach((doc) => {
          task.push(Object.assign(doc.data(), { id: doc.id }));
        });
        task.sort(function (a, b) {
          return (
            new Date(b.date).getTime() - new Date(a.date).getTime() &&
            a.priorities - b.priorities
          );
        });

        setTasksList(task);
      });
    return () => {
      loadUserData();
    };
  }, []);

  return (
    <Grid direction="column" justify="space-evenly" alignItems="center">
      {tasksList.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </Grid>
  );
}
