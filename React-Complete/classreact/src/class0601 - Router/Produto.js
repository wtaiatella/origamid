import React from 'react'
import Head from './Head'
import { useLocation, useParams } from 'react-router-dom'

const Produto = () => {
  const params = useParams()
  console.log(params)

  const location = useLocation()
  console.log(location)

  const search = new URLSearchParams(location.search)
  console.log(search)
  return (
    <div>
      <Head
        title={params.id}
        description="Essa é a descrição da página Produto"
      />
      <h1>Produto</h1>
      <p>Essa é a página do Produto {params.id}</p>

      <p>id: {params.id}</p>
    </div>
  )
}

export default Produto
