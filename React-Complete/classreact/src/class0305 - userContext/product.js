import React from 'react'

import { GlobalContext } from './GlobalContext'

const Product = () => {
  const global = React.useContext(GlobalContext)

  return (
    <div>
      Produto: {global.count}
      <button onClick={() => global.addOne()}>Add</button>
    </div>
  )
}

export default Product
