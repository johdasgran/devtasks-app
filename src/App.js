// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { ToDoCounter } from "./Components/ToDoCounter";
import { ToDoList } from "./Components/ToDoList";
import { ToDoItem } from "./Components/ToDoItem";
import { ToDoButton } from "./Components/ToDoButton";
import { ToDoSearch } from "./Components/ToDoSearch";

const tasks = [
  { text: "Curso intro react", completed: false },
  { text: "Practicar ingles", completed: false },
  { text: "Practicar UX/UI", completed: true },
  { text: "Listen to music", completed: true },
  { text: "Diseñar un poco", completed: true },
  { text: "Descansar", completed: false }
];

function App() {

  const [taskUser, setTaskUser] = React.useState(tasks);
  const [search, setSearch] = React.useState("");

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

  const checkTask = (text) => {
    const taskIndex = taskUser.findIndex(index => index.text === text);
    const newTasks = [...taskUser];
    newTasks[taskIndex].completed = true;
    setTaskUser(newTasks);
  };

  const deleteTask = (text) => {
    const taskIndex = taskUser.findIndex(index => index.text === text);
    const newTasks = [...taskUser];
    newTasks.splice(taskIndex, 1);
    setTaskUser(newTasks);
  };






  return (
    <>
      <ToDoCounter completed={completed.length} inProgress={taskUser.length} />
      <ToDoSearch search={search} setSearch={setSearch} />

      <ToDoList>
        {searchedTask.map((task) => (
          <ToDoItem 
          key={task.text} 
          text={task.text} 
          onComplete={() => checkTask(task.text)} 
          onDelete={() => deleteTask(task.text)}
          />
        ))}
      </ToDoList>

      <ToDoButton />
    </>
  );
}

export default App;
