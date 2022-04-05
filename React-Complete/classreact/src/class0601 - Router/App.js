import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './class0601 - Router/Home'
import Contato from './class0601 - Router/Contato'
import Sobre from './class0601 - Router/Sobre'
import Header from './class0601 - Router/Header'
import Login from './class0601 - Router/Login'
import NaoEncontrado from './class0601 - Router/NaoEncontrado'
import Produto from './class0601 - Router/Produto'

const App = () => {
  return (
    //Tem que envolver toda aplicação que vai depender do router
    <BrowserRouter>
      <Header></Header>
      {/* Envolve somente a parte do código que tem a rotas */}
      <Routes>
        {/* O Route são os caminhos do site */}
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id" element={<Produto />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
