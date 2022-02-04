import React from "react";


function ToDoButton(props) {

  const addTask = () => {
    console.log("Hi!");
    props.setOpenModal(true);
  };

  return <button onClick={addTask}> +</button>;
  
}

export { ToDoButton };
