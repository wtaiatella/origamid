import React from 'react'

//NOTE:
/*
Inthis example is necessary to remove the event scroll during descontruction of the component, otherwise a new event scroll would be add to the windows
every component rendering.

*/

const Product = () => {
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div style={{ height: '200vh' }}>
      <p>Meu Produto</p>
    </div>
  )
}

export default Product
