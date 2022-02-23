import React from 'react'
import Product from './Product'

const Products = () => {
  const productList = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ]

  return (
    <>
      <h1>Products</h1>

      {productList.map((product) => (
        <Product key={product.nome} {...product} />
      ))}
    </>
  )
}

export default Products
