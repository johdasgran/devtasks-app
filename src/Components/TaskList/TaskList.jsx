import React from "react";
import "./TaskList.css"

function ToDoList (props) {
    return (
     <div className="tasks">
         <ul>
             {props.children}
         </ul>
     </div>
    );
}

export { ToDoList };
