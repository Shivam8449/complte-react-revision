import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div style={{border:'1px solid black', padding:'10px', margin:'10px'}}>
      <h1>{product.title}</h1>
      <p>{product.category}</p>
      <p>price: ${product.price}</p>
    </div>
  )
}

export default ProductCard