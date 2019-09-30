import React from 'react'

// STEP 6: SHOW INDIVIDUAL ITEM
const Todo = props => {
  return(
    // ALLOWS DEV TO VISUALIZE COMPLETION IN DEV TOOLS USING CLASS
    <div 
    className={`task ${props.item.completed ? ' completed' : ' '}`}
    // STEP 10: CREATE ONCLICK TO TOGGLE TASK BASED ON ID (WHICH WILL BE COMPARED TO ID OF ARRAY LIST USING THE IF STATEMENT IN APP.JS)
    onClick={()=>props.toggleTask(props.item.id)}
    >
      {/* WILL SHOW EACH TASK NAME INDIVIDUALLY */}
      {props.item.task}
    </div>
  )
}

export default Todo;