import React from 'react'
import Product from './class0302 - exercise/Product'

//NOTE: Exercise description:
/*
Make a SPA with this features:
 -> Build two buttons and when click on it make a fetch to:
      https://ranekapi.origamid.dev/json/api/produto/notebook
      https://ranekapi.origamid.dev/json/api/produto/smartphone
 -> Show the result at the screen in a new component
 -> Keep the Product name as an user preference at localStorage
 -> when the user get the webpage or refresh, use the localStorage product to make a fetch
*/

const App = () => {
  const [product, setProduct] = React.useState(null)
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  //Occurs when rendering
  //TODO: look at localStorage and get user preference to make a fetch
  React.useEffect(() => {
    console.log('Occurs when rendering')
    if (localStorage.length > 0) {
      // Means that there are some data on localStorage
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        if (key === 'Product') {
          let localProduct = window.localStorage.getItem('Product')
          if (localProduct !== 'null') setProduct(localProduct)
        }
      }
    }
  }, [])

  //Occurs every time 'product' is updated
  //TODO: make a fetch to update data variable
  React.useEffect(() => {
    console.log('Occurs when Product is update')
    if (window.localStorage) {
      // Means that there is suport for localStorage
      if (product !== null) {
        window.localStorage.setItem('Product', product)
        setLoading(true)
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
          .then((response) => response.json())
          .then((json) => setData(json))
        setLoading(false)
      }
    }
  }, [product])

  return (
    <>
      <button onClick={() => setProduct('notebook')}>Notebook</button>
      <button onClick={() => setProduct('smartphone')}>Smartphone</button>
      {loading && <p>Loading</p>}
      {!loading && <p>Not Loading</p>}
      {data && <Product data={data} loading={loading} />}
    </>
  )
}

export default App
