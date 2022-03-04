import React from 'react'

// TODO: Make a fetch to receive product data and show it on page

const styleBlock = {
  border: '1px solid',
  padding: '0 20px',
  margin: '20px',
}

const Product = ({ name }) => {
  const productPath = 'https://ranekapi.origamid.dev/json/api/produto' + name
  const [productGet, setProductGet] = React.useState({})
  console.log(productPath)

  fetch(productPath).then(async (respostaDoServidor) => {
    setProductGet(await respostaDoServidor.json())
  })

  return (
    <>
      <div style={styleBlock}>
        <h2>{productGet.nome}</h2>
      </div>
    </>
  )
}

export default Product
