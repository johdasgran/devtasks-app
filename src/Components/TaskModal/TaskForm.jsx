import React from "react";


function TaskForm(props) {

    const [newTask, setNewTask] = React.useState("");

    const onChange = (event) => {
        setNewTask(event.target.value);
    }

    const onLeave = () => {
        props.setOpenModal(false);
        // props.setTraskStar(false);
    }

    // const onStar = () => {
    //     props.setStar(true);
    // }

    const onSubmit = (event) => {
        event.preventDefault();
        props.addTask(newTask);
        props.setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit} >
            <p className="add-new-task" >Add new task. 👻</p>
            <textarea className="textarea" onChange={onChange} placeholder="add task :)"></textarea>
            <div className="buttons">
                <button className="leave" onClick={onLeave} >
                    Leave
                </button>
                <button className="important" onClick={props.addStar}  type="button" >
                    Star
                </button>
                <button className="submit" type="submit">
                    Add task
                </button>
            </div>
        </form>
    );
}

export { TaskForm }