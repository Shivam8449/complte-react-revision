import React from 'react'

const Sort = ({sortOption, setSortOption}) => {
  return (
    <div>
      <select value={sortOption} onChange={(e)=>setSortOption(e.target.value)}>
        <option value="default">Default</option>
        <option value="priceLow">Price Low - High</option>
        <option value="priceHigh">Price High - Low</option>
        <option value="titleAsc">Title a - z</option>
        <option value="titleDesc">Title z - a</option>
      </select>
    </div>
  )
}

export default Sort