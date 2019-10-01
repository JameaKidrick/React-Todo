import React from 'react'

// STEP 12: MAKE FORM THAT ALLOWS ADDITION OF NEW TASKS
  // SINCE THIS FORM IS GOING TO ESSENTIALLY CONTROL ITSELF, IT WILL BE A CLASS COMPONENT
class TodoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      item: ''
    }    
  }

  // STEP 13: ADD ON CHANGE WHICH WILL SET THE STATE OF THE NEW ITEM
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  // STEP 14: ADD ON SUBMIT WHICH WILL ACTUALLY ADD THE NEW ITEM TO THE LIST USING THE PASSED PROPS ADDITEM FROM APP.JS
  submitItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.item)
  }

  render(){
    return(
      <form onSubmit={this.submitItem}>
        <input
        type='text'
        name='item'
        value={this.item}
        onChange={this.handleChange}
        placeholder='Add an item'
        />
        <button>Add Item</button>
      </form>
    )
  }
}

export default TodoForm;