import React from 'react'

const SearchBar = ({search, setSearch}) => {
  return (
    <div>
      <input type="text" 
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      placeholder='search...'
      />
    </div>
  )
}

export default SearchBar