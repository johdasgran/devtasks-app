import React from "react";
import "./TaskCounter.css";
import logo from '../../images/logo-new-dev-tasks.png';

function ToDoCounter({ completed, inProgress }) {
  return (
    <>
      <header className="header">
        <img
          className="images"
          src = {logo}
          alt="logo dev tasks"
        
        />
      </header>
      <h1>hello</h1>
      <h2>
        Has completado {completed} de {inProgress} tareas.
      </h2>
    </>
  );
}

export { ToDoCounter };
