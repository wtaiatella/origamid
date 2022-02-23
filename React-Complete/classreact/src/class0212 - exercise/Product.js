import React from 'react'

const styleBlock = {
  border: '1px solid',
  padding: '0 20px',
  margin: '20px',
}

const Product = ({ nome, propriedades }) => {
  return (
    <>
      <div style={styleBlock}>
        <h2>{nome}</h2>
        <ul>
          {propriedades.map((prop, index) => (
            <li key={index}>{prop}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Product
