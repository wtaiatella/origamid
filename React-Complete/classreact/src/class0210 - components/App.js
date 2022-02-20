import React from 'react'
import Header from './class0210 - components/Header'
import Footer from './class0210 - components/Footer'
import Form from './class0210 - components/form/Form'

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}
      {children}
    </h1>
  )
}

const App = () => {
  return (
    <div>
      <Header />

      <Titulo texto="Meu Primeiro Título" cor="blue">
        {' '}
        Este é o children
      </Titulo>

      <p>Esse é o meu formulário</p>
      <Form />
      <Footer />
    </div>
  )
}

export default App
