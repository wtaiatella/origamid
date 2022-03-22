import React from 'react'
import useLocalStorage from './class0306 - custom hook/useLocalStorage'
import useFetch from './class0306 - custom hook/useFetch'

const App = () => {
  const [product, setProduct] = useLocalStorage('produto', '')

  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/')
  }, [request])

  function handleClick({ target }) {
    setProduct(target.innerText)
  }

  if (error) return <p>{error}</p>
  if (loading) return <p>Carregando...</p>
  if (data)
    return (
      <>
        <p>Produto preferido: {product}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </>
    )
  else return null
}

export default App
