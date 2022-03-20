import React from 'react'

const Product = ({ data, loading }) => {
  console.log(loading)
  return (
    <>
      {loading && <p>Loading</p>}
      {!loading && data && (
        <div>
          <h1>{data.nome}</h1>
          <p>R$ {data.preco}</p>
        </div>
      )}
    </>
  )
}

export default Product
