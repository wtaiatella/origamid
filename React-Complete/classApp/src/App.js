import React from 'react'
import './App.css'

const App = () => {
  //Este é o formato de programação do React, mais complexo e menos intuitivo
  /* return React.createElement(
    'a',
    { href: 'https://www.origamid.com', target: '_blank' },
    'Origamid',
  ) */

  // Esta é o formato para quando tem o babel instalado,
  // É o Babel que converte para o formato React
  return (
    <a href="https://www.origamid.com" target="_blank">
      'Origamid'
    </a>
  )
}

export default App
