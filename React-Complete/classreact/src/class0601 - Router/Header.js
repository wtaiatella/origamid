import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const activeStyle = {
    color: 'tomato',
  }

  return (
    <div>
      <h1>Esse é o Header</h1>
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="sobre">Sobre</Link>
        {' | '}
        <Link to="contato">Contato</Link>
      </nav>

      <nav>
        <NavLink to="/" end activeStyle={activeStyle}>
          Home
        </NavLink>
        {' | '}
        <NavLink to="sobre" activeStyle={activeStyle}>
          Sobre
        </NavLink>
        {' | '}
        <NavLink to="contato" activeStyle={activeStyle}>
          Contato
        </NavLink>
        {' | '}
        <NavLink to="login" activeStyle={activeStyle}>
          Login
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
