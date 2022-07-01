import React, { useState } from 'react'

export default function ToDoForm({ addTask }) {
  const [ userInput, setUserInput ] = useState(''); 

  const handleChange = (e) => {
    setUserInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  }
  return (
    <form onSubmit={handleSubmit}>
        <input className='inp'
            value={userInput} 
            type={'text'} 
            onChange={handleChange} 
            placeholder='Please Type your Task...'
        />
        <button className='submit'>Submit</button>
    </form>
  )
}
