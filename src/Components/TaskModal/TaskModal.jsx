import React from 'react';
import ReactDOM from 'react-dom';

function TaskModal({ children }) {
    return ReactDOM.createPortal(

        <div className="modal">
          <div className="modal-content">
            <span className="close">❌</span>
            {children},
          </div>
        </div>,
        
        document.getElementById("modal")
    )
}

export { TaskModal }