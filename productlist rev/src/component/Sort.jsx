import React from 'react'

const Sort = ({sortOption, setSortOption}) => {
  return (
    <div>
      <select value={sortOption} onChange={(e)=>setSortOption(e.target.value)} >
        <option value="default">Default</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="titleAsc">Title: A to Z</option>
        <option value="titleDesc">Title: Z to A</option>
      </select>
    </div>
  )
}

export default Sort