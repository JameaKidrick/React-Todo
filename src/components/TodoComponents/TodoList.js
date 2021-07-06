import React from 'react'
import Todo from './Todo'

// STEP 4: ITERATE OVER ARRAY TO SHOW EACH LIST ITEM
// STEP 5: PASS MAPPED ITEMS AS PROPS TO TODO COMPONENT WHICH WILL BE USED TO SHOW EACH ITEM ALONE

// STEP 9: PASS THE TOGGLE TO THE TODO COMPONENT
const TodoList = props => {
  return (
    <div className='todo-list'>
      {props.List.map(item => (
        <Todo 
        key={item.id}
        item={item}
        toggleTask={props.toggleTask}
        />
      ))}
      <button className='clear' onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  )
}

export default TodoList;