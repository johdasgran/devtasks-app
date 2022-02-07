import React from "react";
import '../../App.css';
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
    
      <p className="counter" >Has completado <span>{completed}</span> de <span>{inProgress}</span> tareas.</p>
      {/* <h2>
        Has completado {completed} de {inProgress} tareas.
      </h2> */}
    </>
  );
}

export { ToDoCounter };
