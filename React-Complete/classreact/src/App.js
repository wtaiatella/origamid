import React from 'react'
import Button from './class0301 - useState/Button'
import Product from './class0301 - useState/Product'

//To change data between button and product component, use useState

//TODO: use useState to keep data fetched from button
//TODO:

const App = () => {
  //data fetched from API
  const [data, setData] = React.useState(null)

  // to make a loading notice wile fetching data from API
  const [loading, setLoading] = React.useState(null)

  //const props = [data, setData, loading, setLoading]
  return (
    <div>
      <Button setData={setData} setLoading={setLoading}>
        tablet
      </Button>

      <Button setData={setData} setLoading={setLoading}>
        smartphone
      </Button>

      <Button setData={setData} setLoading={setLoading}>
        notebook
      </Button>

      <Product data={data} loading={loading} />
    </div>
  )
}

export default App
