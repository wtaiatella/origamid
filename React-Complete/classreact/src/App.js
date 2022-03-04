import React from 'react'
import Button from './class0301 - useState/Button'
import Product from './class0301 - useState/Product'

//TODO: use useState to keep data fetched from button
//TODO:

const App = () => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  const props = [data, setData, loading, setLoading]
  return (
    <div>
      <Button props={props}>tablet</Button>

      <Product props={props} />
    </div>
  )
}

export default App
