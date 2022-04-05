import React from 'react'
import Head from './Head'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  function handleClick() {
    console.log('Script para fazer login')
    navigate('/sobre')
  }
  return (
    <div>
      <Head title="Login" description="Essa é a descrição da página Login" />
      <h1>Login</h1>
      <p>Essa é a Login</p>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
