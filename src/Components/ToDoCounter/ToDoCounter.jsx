import React from "react";

function ToDoCounter({completed, inProgress}) {
    return (
        <h2>Has completado {completed} de {inProgress} tareas.</h2>
    );
}

export { ToDoCounter };
