import React from 'react'
import Header from './class0212 - exercise/Header'
import Home from './class0212 - exercise/Home'
import Products from './class0212 - exercise/Products'

const pathName = window.location.pathname

const Page = pathName === '/Products' ? Products : Home
console.log(pathName)

const App = () => {
  return (
    <div>
      <Header />

      <Page />
    </div>
  )
}

export default App
