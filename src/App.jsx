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

  const [darkMode, setDarkMode] = React.useState(true);

  const [taskStar, setTaskStar] = React.useState(false);


  const completed = taskUser.filter((taskCompleted) => taskCompleted.completed);

  console.log(taskStar)

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
      newTasks.push({ completed: false, text, star: taskStar});
      saveTask(newTasks);
    } 
  };

  const addStar = () => {
    setTaskStar(true);
  }

  const checkStar= (text) => {
    const taskIndex = taskUser.findIndex((index) => index.text === text);
    const newTasks = [...taskUser];
    newTasks[taskIndex].star= false;
    saveTask(newTasks);
  };

  const checkTask = (text) => {
    const taskIndex = taskUser.findIndex((index) => index.text === text);
    const newTasks = [...taskUser];
    if(newTasks[taskIndex].completed){
      newTasks[taskIndex].completed = false;
    } else {
      newTasks[taskIndex].completed = true;
    }
    
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
      <TaskCounter completed={completed.length} inProgress={taskUser.length} darkMode={darkMode} setDarkMode={setDarkMode}/>

      <div className="container">
        <TaskSearch
          search={search}
          setSearch={setSearch}
          setTaskStar={setTaskStar}
          setOpenModal={setOpenModal}
        />

        <TaskList>
          {searchedTask.map((task) => (
            <TaskItem
              completed={task.completed}
              star={task.star}
              taskStar={taskStar}
              key={task.text}
              text={task.text}
              onComplete={() => checkTask(task.text)}
              onDelete={() => deleteTask(task.text)}
              onStar={()=> checkStar(task.text)}
            />
          ))}
        </TaskList>
      </div>

      {/* <TaskButton setOpenModal={setOpenModal} /> */}

      {openModal ? (
        <TaskModal setOpenModal={setOpenModal} openModal={openModal}>
          <TaskForm addStar={addStar} addTask={addTask} setOpenModal={setOpenModal} />
        </TaskModal>
      ) : (
        ""
      )}

      <TaskMenu />
    </>
  );
}

export default App;
