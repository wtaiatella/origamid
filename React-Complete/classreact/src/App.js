import React from 'react'
import Product from './class0302 - useEffect/Product'

const App = () => {
  const [count, setCount] = React.useState(0)
  const [data, setData] = React.useState(null)
  const [modal, setModal] = React.useState(false)

  //Occurs every time 'count' is updated
  React.useEffect(() => {
    document.title = 'Count is ' + count
  }, [count])

  React.useEffect(() => {
    console.log('Occurs when rendering')
  }, [])

  React.useEffect(() => {
    console.log('Occurs when rendering and starting')
  })

  //NOTE: To work properly, the useEffect in this case should have an empty arrays as dependency to be executed only when de component is render
  //for the first time. Otherwise the fetch will execute all the time

  //Example for fetch a data from API
  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])

  return (
    <>
      {data && (
        <div>
          <h1>{data.nome}</h1>
          <p>R$ {data.preco * count}</p>
        </div>
      )}
      <button onClick={() => setCount(count + 1)}>{count}</button>

      {modal && <Product />}

      <button onClick={() => setModal(!modal)}>Show Modal</button>
    </>
  )
}

export default App
