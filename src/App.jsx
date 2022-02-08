// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { TaskCounter } from "./Components/TaskCounter/TaskCounter";
import { TaskList } from "./Components/TaskList/TaskList";
import { TaskItem } from "./Components/TaskItem/TaskItem";
// import { TaskButton } from "./Components/TaskButton/TaskButton";
import { TaskSearch } from "./Components/TaskSearch/TaskSearch";
import { useLocalStorage } from "./TaskContext/useLocalStorage";
import { TaskModal } from "./Components/TaskModal/TaskModal";
import { TaskForm } from "./Components/TaskModal/TaskForm";
import { TaskMenu } from "./Components/TaskMenu/TaskMenu";
import "./Components/TaskModal/style.css";

// const tasks = [
//   { text: "Curso intro react", completed: false },
//   { text: "Practicar ingles", completed: false },
//   { text: "Practicar UX/UI", completed: true },
//   { text: "Listen to music", completed: true },
//   { text: "Diseñar un poco", completed: true },
//   { text: "Descansar", completed: false }
// ];

function App() {
  const [taskUser, saveTask] = useLocalStorage("TASK_USER", []);

  const [search, setSearch] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completed = taskUser.filter((taskCompleted) => taskCompleted.completed);

  let searchedTask = [];

  if (search.length >= 1) {
    searchedTask = taskUser.filter((searchTask) => {
      const taskText = searchTask.text.toLowerCase();
      const seachText = search.toLowerCase();
      return taskText.includes(seachText);
    });
  } else {
    searchedTask = taskUser;
  }

  const addTask = (text) => {
    const newTasks = [...taskUser];
    if (text.length === 0) {
      saveTask(newTasks);
    } else {
      newTasks.push({ completed: false, text });
      saveTask(newTasks);
    }
  };

  const checkTask = (text) => {
    const taskIndex = taskUser.findIndex((index) => index.text === text);
    const newTasks = [...taskUser];
    newTasks[taskIndex].completed = true;
    saveTask(newTasks);
  };

  const deleteTask = (text) => {
    const taskIndex = taskUser.findIndex((index) => index.text === text);
    const newTasks = [...taskUser];
    newTasks.splice(taskIndex, 1);
    saveTask(newTasks);
  };

  return (
    <>
      <TaskCounter completed={completed.length} inProgress={taskUser.length} />

      <div className="container">
        <TaskSearch
          search={search}
          setSearch={setSearch}
          setOpenModal={setOpenModal}
        />

        <TaskList>
          {searchedTask.map((task) => (
            <TaskItem
              completed={task.completed}
              key={task.text}
              text={task.text}
              onComplete={() => checkTask(task.text)}
              onDelete={() => deleteTask(task.text)}
            />
          ))}
        </TaskList>
      </div>

      {/* <TaskButton setOpenModal={setOpenModal} /> */}

      {openModal ? (
        <TaskModal setOpenModal={setOpenModal} openModal={openModal}>
          <TaskForm addTask={addTask} setOpenModal={setOpenModal} />
        </TaskModal>
      ) : (
        ""
      )}

      <TaskMenu />
    </>
  );
}

export default App;
