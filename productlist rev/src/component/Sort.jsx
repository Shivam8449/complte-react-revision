import React from 'react'

const Sort = ({sortOption, setSortOption}) => {
  return (
    <div>
      <select value={sortOption} onChange={(e)=>setSortOption(e.target.value)}>
        <option value="default">Default</option>
        <option value="priceLow">Price: Low - high</option>
        <option value="priceHigh">Price: High-low</option>
        <option value="titleAsc">Title: A-Z</option>
        <option value="titleDesc">Title: Z-A</option>
      </select>
    </div>
  )
}

export default Sort