import React from 'react'

const useLocalStorage = (key, init) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key)
    return local ? local : init
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state, key])

  return [state, setState]
}

export default useLocalStorage
