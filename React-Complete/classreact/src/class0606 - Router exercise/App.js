import React from 'react'
import './class0606 - Router exercise/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Produtos from './class0606 - Router exercise/Components/Produtos'
import Header from './class0606 - Router exercise/Components/Header'
import Footer from './class0606 - Router exercise/Components/Footer'
import Contato from './class0606 - Router exercise/Components/Contato'
import Produto from './class0606 - Router exercise/Components/Produto'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
