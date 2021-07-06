import React, { useState, useEffect } from 'react'

// STRETCH

const SearchForm = props => {
  
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  // useEffect(() => {
  //   console.log('props.List', props.List)
  //   const results = props.List.filter(task => 
  //     task.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  // },[searchTerm])

  const handleChange = e => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.editSearch(searchTerm)
  }

  return(
    <div>
      SEARCH FORM
      <form onSubmit={handleSubmit}>
        <input 
        type='text'
        name='search'
        placeholder='Search your To Do List'
        onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <div>
        <ul>
          {searchResults.map(task => (
            <li>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  )
  
}

export default SearchForm