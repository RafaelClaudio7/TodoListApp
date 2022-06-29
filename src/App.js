import React, {useState} from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

import data from './data.json';

function App() {
  const [ toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let maped = toDoList.map(task => {
      return task.id == id ? {...task, complete: !task.complete } : { ...task };
    });
    setToDoList(maped);
    };

  const handleFilter = (id) => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
    </div>
  );
  
}

export default App;
