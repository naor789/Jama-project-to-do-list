import React, { useState, useEffect } from "react";
import Task from "./Task";
import { TaskContext } from "../context/TaskContext";
import { database } from "./firebase";

export default function TasksList() {
  const [tasksList, setTasksList] = useState([]);

    useEffect(() => {
      console.log("hello");
    const loadUserData = database
      .collection("tasks")
      .onSnapshot((querySnapshot) => {
          const task = [];
        //   console.log(task, "hmm");
        querySnapshot.forEach((doc) => {
          task.push(Object.assign(doc.data() , { id: doc.id }));
        });
          setTasksList(() => task);
          console.log("hi" , tasksList.task);
      });
    // return () => {
    loadUserData();
    // };
  }, []);

  return (
    <div>
      {tasksList.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>

    // <TaskContext.Consumer>
    //   {(context) => {
    //     return (
    //       <div>
    //         {context.tasksList.map((task) => {
    //           return <Task key={task.id} task={task} />;
    //         })}
    //       </div>
    //     );
    //   }}
    // </TaskContext.Consumer>
  );
}
