import React from "react";


function TaskForm(props) {

    const [newTask, setNewTask] = React.useState("");

    const onChange = (event) => {
        setNewTask(event.target.value);
    }

    const onLeave = () => {
        props.setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        props.addTask(newTask);
        props.setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit} >
            <textarea onChange={onChange} placeholder="add task :)"></textarea>
            <div>
                <button onClick={onLeave} type="button">
                    Leave
                </button>
                <button type="submit">
                    Add task
                </button>
            </div>
        </form>
    );
}

export { TaskForm }