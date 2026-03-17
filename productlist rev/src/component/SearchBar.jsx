import React from 'react'

const SearchBar = ({Search, setSearch}) => {
  return (
    <div>
      <input type="text"
      value={Search}
      onChange={(e)=>setSearch(e.target.value)}
      placeholder='search.. '
      />
    </div>
  )
}

export default SearchBar