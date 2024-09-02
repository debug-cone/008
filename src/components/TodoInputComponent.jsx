import React from 'react'
import { useState } from 'react'

function TodoInputComponent( {allTodo, setAllTodo} ) {
    const [currentState, setCurrentState] = useState('');

    function handleInput(e) {
        setCurrentState(e.target.value)
    }
    function handleTodo() {
        // setAllTodo(currentState)
        // console.log(currentState);
        if(currentState){
            setAllTodo([...allTodo, { title: currentState, i: new Date().getTime() }]);
            setCurrentState('');
            
        }
    }

    return (
        <div className='mb-4'>
            <input 
            type="text" 
            placeholder='Insert TODO' 
            onChange={handleInput}
            value={currentState}
            />

            <button 
            className='bg-white text-black'
            onClick={handleTodo}
            >
                Add TODO
            </button>
        </div>
    )
}

export default TodoInputComponent