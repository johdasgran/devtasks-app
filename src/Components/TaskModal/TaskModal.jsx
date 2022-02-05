import React from "react";
import ReactDOM from "react-dom";



function TaskModal(props) {
  const closeModal = () => {
    console.log("Sayonara!");
    props.setOpenModal(false);
  };



  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <span onClick={closeModal} className="close">
          ❌
        </span>
        {props.children}
      </div>
    </div>,

    document.getElementById("modal")
  );
}

export { TaskModal };
