import React from "react";
import "./TaskSearch.css";

function TaskSearch({ search, setSearch, setTaskStar, setOpenModal, darkMode }) {
  const onSearchValue = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  const addTask = () => {
    console.log("Hi!");
    setTaskStar(false);
    setOpenModal(true);
  };

  let className = "icon add-task rotate-center";
  darkMode ? className += " add-task-black" : className += " add-task-white";

  return (
    <>
      <div className="search">
        <input
          value={search}
          onChange={onSearchValue}
          className="search input search-icon"
          placeholder="Toda soltera... 🎶"
          type="text"
        />
         <button onClick={addTask} className={className}></button>
      </div>
    </>
  );
}

export { TaskSearch };
