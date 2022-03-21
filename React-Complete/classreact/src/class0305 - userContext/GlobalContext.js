import React from 'react'

export const GlobalContext = React.createContext()

//A GlobalStorage is used to envolve all content in App aplication. This way is possible to provide all functions and every data to componets

export const GlobalStorage = ({ children }) => {
  //****************************************
  //all useState and functions is possible to be used by the components in children
  //****************************************

  const [count, setCount] = React.useState(0)
  const [data, setData] = React.useState(null)

  function addOne() {
    setCount((count) => count + 1)
  }

  function addTwo() {
    setCount((count) => count + 2)
  }

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])

  function clearData() {
    setCount('')
  }

  return (
    <GlobalContext.Provider value={{ count, data, addOne, addTwo, clearData }}>
      {children}
    </GlobalContext.Provider>
  )
}
