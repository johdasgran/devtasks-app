import React from "react";
import "./TaskItem.css";

function TaskItem(props) {
  // const onComplete = () => {
  //   alert(`Has completado la tarea: ${props.text}`);
  // };

  // const onDelete = () => {
  //   alert(`Has borrado la tarea: ${props.text}`);
  // };

  // { completed, inProgress }

  console.log(props.completed);

  
  let className = 'icon check';
  if (props.completed) {
    className = 'icon completed';
  }

  return (
    <li className="task-item">
      <span className={className} onClick={props.onComplete}></span>
      <p className="note">{props.text}</p>
      <span className="icon star"></span>
      <span className="icon trash" onClick={props.onDelete}></span>
    </li>
  );
}

export { TaskItem };
