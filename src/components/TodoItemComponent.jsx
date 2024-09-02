import React from 'react'

function TodoItemComponent( {allTodo, setAllTodo} ) {

  function handleRemoveTodo(i) {
    let removeTodo = allTodo.filter((todo) => todo.i !== i);
    // console.log(removeTodo);
    setAllTodo(removeTodo)
  }
  
  return (
    <div className='flex flex-col gap-[20px]'>
      {allTodo.length > 0 ?
        allTodo.map((el, i) => {
          return ( 
          <div 
          key={el.i}
          className='flex items-center gap-2'
          >
            <h2 
            className='p-2 bg-white'
            >
              {el.title}
            </h2>

            <button 
            onClick={() => handleRemoveTodo(el.i)}
            className='bg-white text-red-500 p-2'
            >
              Remove
            </button>
          </div>  
        )
      })
      :
      <h2>No TODO for today!!!</h2>
      }
    </div>
  )
}

export default TodoItemComponent