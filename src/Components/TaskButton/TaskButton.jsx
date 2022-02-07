import React from "react";


function TaskButton(props) {

  const addTask = () => {
    console.log("Hi!");
    props.setOpenModal(true);
  };

  return (
  <div>
  <p>Boton xd</p>
  <button onClick={addTask}> +</button>
  </div>
  );
}

export { TaskButton };
