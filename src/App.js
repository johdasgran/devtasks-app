// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { ToDoCounter } from "./Components/ToDoCounter";
import { ToDoList } from "./Components/ToDoList";
import { ToDoItem } from "./Components/ToDoItem";
import { ToDoButton } from "./Components/ToDoButton";
import { ToDoSearch } from "./Components/ToDoSearch";

const tasks = [
  { text: "Curso intro react", completed: false},
  { text: "Practicar ingles", completed: false},
  { text: "Practicar UX/UI", completed: false}
];


function App() {
  return (
    <>
      <ToDoCounter /> 
      <ToDoSearch />
      
    <ToDoList>

    {
      tasks.map(task => (
        <ToDoItem key={task.text} text={task.text} />
      ))
    }
      
    </ToDoList>


    <ToDoButton />


    </>
  );
}

export default App;
