// import logo from './logo.svg';
// import './App.css';
import React from "react";
import ToDoCounter from "./Components/ToDoCounter";


const task = [
  { text: "Curso intro react", completed: false},
  { text: "Practicar ingles", completed: false},
  { text: "Practicar UX/UI", completed: false}
];


function App() {
  return (
    <React.Fragment>
      <ToDoCounter /> 
        <h1>Hahaha</h1>
      

    </React.Fragment>
  );
}

export default App;
