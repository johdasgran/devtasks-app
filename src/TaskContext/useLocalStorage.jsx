import React from "react";

function useLocalStorage(itemUser, initialValue) {
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

export { useLocalStorage };
