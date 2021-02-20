import React, { useState , useEffect} from "react";
// import ToDoForm from "./ToDoForm";
import { Button , Link} from "@material-ui/core";
import "../App.css";
import TasksList from "./TaskList";
import { database } from "./firebase";



export default function Home() {
//       const [tasksList, setTasksList] = useState([]);
 
    
//   useEffect(() => {
//     const loadUserData = database
//       .collection("tasks")
//       .onSnapshot((querySnapshot) => {
//         const tasks = [];
//         querySnapshot.forEach((doc) => {
//           tasks.push(Object.assign(doc.data(), { id: doc.id }));
//         });
//         // tasks.sort(function (a, b) {
//         //   return (
//         //     new Date(b.tweet.date).getTime() - new Date(a.tweet.date).getTime()
//         //   );
//         // });
//         setTasksList(() => tasks);
//       });
//     // return () => {
//       loadUserData();
//     // };
//   }, []);

    // function addTweet(task) {
    //   setTimeout(() => {
    //     database
    //       .collection("tasks")
    //       .add({
    //         task,
    //       })
    //       .then(function (docRef) {
    //         console.log("Document written with ID: ", docRef.id);
    //       })
    //       .catch(function (error) {
    //         console.error("Error adding document: ", error);
    //       });
    //   }, 1000);
    // }

    
  return (
    <>
      <div className="container">
        <h1 className="welcome">Welcome </h1>
              <Button variant="contained">To Do List</Button>
              <Button variant="contained">Add Task</Button>
              <TasksList></TasksList>
      </div>
    </>
  );
}
