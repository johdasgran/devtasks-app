import React from "react";
import "./TaskSearch.css";

function TaskSearch({ search, setSearch, setOpenModal }) {
  const onSearchValue = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  const addTask = () => {
    console.log("Hi!");
    setOpenModal(true);
  };

  return (
    <>
      {/* <input value={search} onChange={ onSearchValue } placeholder="Search..."/> */}

      <div className="search">
        <input
          value={search}
          onChange={onSearchValue}
          className="search input search-icon"
          placeholder="Toda soltera... 🎶"
          type="text"
        />
         <button onClick={addTask} className="icon add-task rotate-center"></button>
      </div>
    </>
  );
}

export { TaskSearch };
