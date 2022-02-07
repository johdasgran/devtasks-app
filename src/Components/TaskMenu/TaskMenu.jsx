import React from "react";
import "./Taskmenu.css";

import fire from '../../images/fire.svg';
import star from '../../images/star.svg';
import completed from '../../images/completed.svg';

function TaskMenu() {
  return <>
      <footer className="footer-menu">
      <div className="menu">
        <img src={fire} alt="menu de tareas por hacer" />
        <img src={star} alt="menu de tareas importantes" />
        <img src={completed} alt="menu de tareas completadas" />
      </div>
    </footer>
  </>;
}


export { TaskMenu }