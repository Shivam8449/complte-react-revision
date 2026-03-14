import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div style={{border:'1px solid black', margin:'10px', padding:'10px'}} >
      <h2>{product.title}</h2>
      <p>{product.category}</p>
      <p>price: ${product.price}</p>
    </div>
  )
}

export default ProductCard