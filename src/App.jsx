import { useEffect, useState } from 'react'

import TodoInputComponent from './components/TodoInputComponent';
import TodoItemComponent from './components/TodoItemComponent';

import './App.css'

function App() {

  // const [darkMode, setDarkMode] = useState(false);
  const [allTodo, setAllTodo] = useState([]); 

  useEffect(() => {
    console.log(allTodo);
    
  }, [allTodo])

  return (
    <>
      <div className='flex flex-col items-center justify-center my-[100px] bg-blue-500 p-[40px]'>
        <TodoInputComponent allTodo={allTodo} setAllTodo={setAllTodo} />
        <TodoItemComponent allTodo={allTodo} setAllTodo={setAllTodo} />
      </div>
   </>
  )
}

export default App
