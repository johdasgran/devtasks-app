import React from "react";

function ToDoSearch({search, setSearch}) {

    

    const onSearchValue = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    }


    return (
        <input value={search} onChange={ onSearchValue } placeholder="Search..."/>
    );
}

export { ToDoSearch }