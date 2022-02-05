import React from "react";


function TaskForm() {

    return (
        <form>
            <textarea placeholder="add task :)"></textarea>
            <div>
                <button>
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