import React from 'react'

const Filter = ({category,setCategory}) => {
  return (
    <select value={category} onChange={(e)=>setCategory(e.target.value)}>
      <option value="all">All</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">jewelery</option>
    </select>
  )
}

export default Filter