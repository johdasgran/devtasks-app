import React from "react";
import "./TaskSearch.css";

function ToDoSearch({ search, setSearch }) {
  const onSearchValue = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
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
      </div>

      
    </>
  );
}

export { ToDoSearch };
