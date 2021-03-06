import React from "react";
import '../../App.css';
import "./TaskCounter.css";
import logoWhite from '../../images/logo-white.png';
import logoBlack from '../../images/logo-black.png';

function TaskCounter({ completed, inProgress, darkMode, setDarkMode }) {

  function setColor(primary, text) {
    document.documentElement.style.setProperty('--devtask-primary', primary);
    document.documentElement.style.setProperty('--devtask-text', text);
  }

  let className = "icon rotate-center mode";
  if(darkMode){
    setColor('#1f1e25','#fdfbfd');
    className += " dark-mode" 
  } else {
    setColor('#fdfbfd','#3d3043');
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
         <button onClick={add_darkmode} className={className} ></button>
      </header>
    
      <p className="counter" >Has completado <span>{completed}</span> de <span>{inProgress}</span> tareas.</p>
      {/* <h2>
        Has completado {completed} de {inProgress} tareas.
      </h2> */}
    </>
  );
}

export { TaskCounter };
