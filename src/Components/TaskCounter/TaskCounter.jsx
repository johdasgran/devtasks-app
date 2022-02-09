import React from "react";
import '../../App.css';
import "./TaskCounter.css";
import logoWhite from '../../images/logo-white.png';
import logoBlack from '../../images/logo-black.png';

function TaskCounter({ completed, inProgress, darkMode, setDarkMode }) {

  let className = "icon rotate-center mode";
  if(darkMode){
    className += " dark-mode" 
  } else {
    className += " white-mode"
  }

  let logo;
  darkMode ?  logo = logoBlack : logo = logoWhite;


  const add_darkmode = () => {
    if(darkMode) {
      setDarkMode(false);

      // console.log("es true xd")
    } else {
      setDarkMode(true);
      // console.log("es falso xd")
    }

  }

  return (
    <>
      <header className="header">
        <img
          className="images"
          src = {logo}
          alt="logo dev tasks"
        
        />
         <button onClick={add_darkmode} className={className}></button>
      </header>
    
      <p className="counter" >Has completado <span>{completed}</span> de <span>{inProgress}</span> tareas.</p>
      {/* <h2>
        Has completado {completed} de {inProgress} tareas.
      </h2> */}
    </>
  );
}

export { TaskCounter };
