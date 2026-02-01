import React from 'react'
import ProductCard from '../ProductCard/ProductCard.jsx'

const sampleProducts = [
  { id: 1, name: 'Produto A', price: 'R$ 99,00' },
  { id: 2, name: 'Produto B', price: 'R$ 149,00' },
  { id: 3, name: 'Produto C', price: 'R$ 199,00' }
]

export default function ProductListing() {
  return (
    <section>
      <h2>Produtos</h2>
      <div className="product-list">
        {sampleProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
