import React from "react";
import "./TaskList.css"

function TaskList (props) {
    return (
     <div className="tasks">
         <ul>
             {props.children}
         </ul>
     </div>
    );
}

export { TaskList };
