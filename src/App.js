import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import './components/TodoComponents/Todo.css'

// STEP 1: MAKE LIST
const todoList = [
  {
    task: 'Organize Garage',
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // STEP 2: CCR
  constructor(){
    super();
    this.state = {
      List: todoList
    };
  }

  // STEP 7: TOGGLE COMPLETED
  toggleTask = id => {
    // SET STATE OF LIST
    this.setState({
      // MAP THROUGH LIST TASKS
      List: this.state.List.map(item => {
        // IF ITEM ID MATCHES THE ID OF THE TASK WE CLICKED, TAKE ALL THE INFORMATION THAT THE TASK/ITEM HAS (...ITEM), BUT CHANGE THE COMPLETED ELEMENT TO ITS OPPOSITE BOOLEAN (FALSE -> TRUE)
        if(item.id === id){
          return{
            ...item,
            completed: !item.completed
          }
          // MAKE SURE TO ADD RETURN FOR ELSE
        }else{
          return item;
        }
      })
    })
  }

  // STEP 11: ADD ADDITEM FUNCTION THAT WILL BE PASSED DOWN TO THE TODOFORM AS A PROPS
  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      List: [...this.state.List, newItem]
    })
  }


  // STEP 3: RENDER/RETURN COMPONENT THAT WILL ITERATE OVER LIST ARRAY WHILE PASSING IN THE LIST AS A PROPS
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {/* STEP 8: PASS THE TOGGLE TO TODOLIST */}
        <TodoList 
        List={this.state.List}
        toggleTask={this.toggleTask}
        />
      </div>
    );
  }
}

export default App;
