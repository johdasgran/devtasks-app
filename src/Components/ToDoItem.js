import React from "react";

function ToDoItem(props) {
  const onComplete = () => {
    alert(`Has completado la tarea: ${props.text}`);
  };

  const onDelete = () => {
    alert(`Has borrado la tarea: ${props.text}`);
  };

  return (
    <li>
      <p>
        <span onClick={onComplete}>✔️ </span> 
        {props.text}
        <span onClick={onDelete}> ❌</span>
      </p>
    </li>
  );
}

export { ToDoItem };
