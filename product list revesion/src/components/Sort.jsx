import React from 'react'

const Sort = ({sortOption, setSortOption}) => {
  return (
    <div>
      <select value={sortOption} onChange={(e)=>setSortOption(e.target.value)} >
        <option value="default">Default</option>
        <option value="priceLow">Price Low - High</option>
        <option value="priceHigh">Price High - Low</option>
        <option value="titleAsc">Title A - Z</option>
        <option value="titleDesc">Title Z - A</option>
      </select>
    </div>
  )
}

export default Sort