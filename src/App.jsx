// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { ToDoCounter } from "./Components/ToDoCounter/ToDoCounter";
import { ToDoList } from "./Components/ToDoList/ToDoList";
import { ToDoItem } from "./Components/ToDoItem/ToDoItem";
import { ToDoButton } from "./Components/ToDoButton/ToDoButton";
import { ToDoSearch } from "./Components/ToDoSearch/ToDoSearch";

// const tasks = [
//   { text: "Curso intro react", completed: false },
//   { text: "Practicar ingles", completed: false },
//   { text: "Practicar UX/UI", completed: true },
//   { text: "Listen to music", completed: true },
//   { text: "Diseñar un poco", completed: true },
//   { text: "Descansar", completed: false }
// ];

function useLocalStorage (itemUser, initialValue) {
  const localStorageItem = localStorage.getItem(itemUser);
  let parseItem;

  if (localStorageItem) {
    parseItem = JSON.parse(localStorageItem);
  } else {
    localStorage.setItem(itemUser, JSON.stringify(initialValue));
    parseItem = [];
  }

  const [taskUser, setTaskUser] = React.useState(parseItem);
  
  const saveItem = (newItems) => {
    const stringfyTask = JSON.stringify(newItems);
    localStorage.setItem(itemUser, stringfyTask);
    setTaskUser(newItems);
  };

  return [taskUser, saveItem];

}


function App() {

  const [taskUser, saveTask] = useLocalStorage("TASK_USER", []);

  

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
