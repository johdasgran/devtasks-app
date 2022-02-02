import React from "react";

function ToDoButton() {
  const addTask = () => {
    console.log("Hi!");
  };

  return <button onClick={addTask}> +</button>;
}

export { ToDoButton };
