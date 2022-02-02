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
  { text: "Smoke weed", completed: true },
  { text: "Listen to music", completed: true },
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

  const check = (text) => {
    const taskIndex = tasks.findIndex((index) => index.text === text);
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = true;
    setTaskUser(newTasks);
  };

  return (
    <>
      <ToDoCounter completed={completed.length} inProgress={tasks.length} />
      <ToDoSearch search={search} setSearch={setSearch} />

      <ToDoList>
        {searchedTask.map((task) => (
          <ToDoItem key={task.text} text={task.text} completed={task.completed} onComplete={() => check(task.text)} />
        ))}
      </ToDoList>

      <ToDoButton />
    </>
  );
}

export default App;
