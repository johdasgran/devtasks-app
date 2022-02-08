import React from "react";


function TaskButton(props) {

  const addTask = () => {
    console.log("Hi!");
    props.setOpenModal(true);
  };

  return (
  <div>
  <button className="icon add-task rotate-center" onClick={addTask}></button>
  </div>
  );
}

export { TaskButton };
