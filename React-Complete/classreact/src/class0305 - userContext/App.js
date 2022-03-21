import React from 'react'
import { GlobalStorage } from './class0305 - userContext/GlobalContext'
import Product from './class0305 - userContext/product'

const App = () => {
  return (
    <GlobalStorage>
      <Product />
    </GlobalStorage>
  )
}

export default App
