import React from 'react'

export default function ProductOptions() {
  return (
    <div className="product-options">
      <label>
        Quantidade:
        <input type="number" defaultValue={1} min={1} />
      </label>
    </div>
  )
}
