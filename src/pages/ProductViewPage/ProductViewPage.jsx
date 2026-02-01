import React from 'react'
import ProductDetails from '../../components/ProductDetails/ProductDetails.jsx'
import BuyBox from '../../components/BuyBox/BuyBox.jsx'

export default function ProductViewPage() {
  const product = { id: 1, name: 'Produto A', price: 'R$ 99,00' }

  return (
    <div>
      <ProductDetails product={product} />
      <BuyBox />
    </div>
  )
}
