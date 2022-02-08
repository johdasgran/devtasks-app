import React from "react";
import '../../App.css';
import "./TaskCounter.css";
import logo from '../../images/logo-white.png';

function TaskCounter({ completed, inProgress, darkMode, setDarkMode }) {

  let className = "icon rotate-center";
  if(darkMode){
    className += " dark-mode" 
  } else {
    className += " white-mode"
  }



  return (
    <>
      <header className="header">
        <img
          className="images"
          src = {logo}
          alt="logo dev tasks"
        
        />
         <button onClick={() => setDarkMode(false)} className={className}></button>
      </header>
    
      <p className="counter" >Has completado <span>{completed}</span> de <span>{inProgress}</span> tareas.</p>
      {/* <h2>
        Has completado {completed} de {inProgress} tareas.
      </h2> */}
    </>
  );
}

export { TaskCounter };
