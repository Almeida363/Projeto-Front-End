import React from 'react'

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button>Ver detalhes</button>
    </article>
  )
}
