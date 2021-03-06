import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({ toDoList, handleToggle, handleFilter }) {
  return (
    <div>
        {toDoList.map(todo => {
            return (
                <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
            )
        })}
        <button style={{margin: "20px"}} onClick={handleFilter} className="clear">Clear Completed Tasks</button>
    </div>
  );
};
