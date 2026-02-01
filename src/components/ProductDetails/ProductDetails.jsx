import React from 'react'
import ProductOptions from '../ProductOptions/ProductOptions.jsx'

export default function ProductDetails({ product }) {
  if (!product) return <div>Produto não encontrado</div>

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <ProductOptions />
    </div>
  )
}
