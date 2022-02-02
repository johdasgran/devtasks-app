import React from "react";

function ToDoSearch() {

    const [search, setSearch] = React.useState("");

    const onSearchValue = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    }


    return [
        <input value={search} onChange={ onSearchValue } placeholder="Search..."/>,
        <h1>{search}</h1>
    ];
}

export { ToDoSearch }