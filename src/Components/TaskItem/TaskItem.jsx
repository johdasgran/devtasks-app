import React from "react";
import "./TaskItem.css";

function ToDoItem(props) {
  // const onComplete = () => {
  //   alert(`Has completado la tarea: ${props.text}`);
  // };

  // const onDelete = () => {
  //   alert(`Has borrado la tarea: ${props.text}`);
  // };

  console.log(props.onComplete);

  return (
    <li className="task-item">
      <span className="check" onClick={props.onComplete}></span>
      <p className="note">{props.text}</p>
      <span className="star"></span>
      <span className="trash" onClick={props.onDelete}></span>
    </li>
  );
}

export { ToDoItem };
