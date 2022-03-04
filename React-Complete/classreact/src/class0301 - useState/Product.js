import React from 'react'

// TODO: acesse data from props
// TODO: show it in the page

const Product = ({ data, loading }) => {
  const productBlock = (
    <>
      <h2>{data.nome}</h2>
      <p>R$ {data.preco}</p>
      <img src={data.fotos[0].src} alt={data.nome} />
    </>
  )

  return (
    <>
      {loading && <p>Loading</p>}
      {!loading && data && productBlock}
    </>
  )
}

export default Product
