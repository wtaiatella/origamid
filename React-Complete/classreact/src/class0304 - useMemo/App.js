import React from 'react'

/*
UseMemo is used to prevent that a slow function runs at every render and if it is not necessary
the function just runs once or when the dependency is updated

*/

//This is a example of slow function
function slowFunction() {
  let c
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10
  }
  return c
}

const App = () => {
  const [count, setCount] = React.useState(0)
  //register the time reference
  const t1 = performance.now()
  const value = React.useMemo(() => slowFunction(), [])
  //log the time diference, about 100ms
  console.log(performance.now() - t1)

  return <button onClick={() => setCount(count + 1)}>{value}</button>
}

export default App
