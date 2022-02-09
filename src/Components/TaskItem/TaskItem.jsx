import React from "react";
import "./TaskItem.css";

function TaskItem(props) {
  let className = "icon check";
  let classNameText = "note";

  if(props.darkMode) {
    className += " check-white";
  } else {
    className += " check-black"
  }

  if (props.completed) {
    className = "icon completed";
    classNameText += " check-text";
  }

  let classStar = "";
  if (props.star) {
    classStar = "icon star";
  }

  return (
    <li className="task-item">
      <span className={className} onClick={props.onComplete}></span>
      <p className={classNameText}>{props.text}</p>
      <span className={classStar} onClick={props.onStar}></span>
      <span className="icon trash" onClick={props.onDelete}></span>
    </li>
  );
}

export { TaskItem };
