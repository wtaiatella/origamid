import React from 'react'

//a variavel pode estar fora do App
const titulo = <h1>Esse é um título</h1>

const App = () => {
  const random = Math.random()
  const ativo = true

  //uso de funções
  function mostrarNome(sobrenome) {
    return 'Wagner ' + sobrenome
  }

  /* 
  Alguns parâmetros do HTML mudaram de nome no JSX porque os seus nomes originais já eram palavras reservadas do javaCript, por exemplo:

  for (do label) -> htmlFor
  class -> className 

  o mesmo se repete para propriedades do CSS
  font-size -> fontSize
  font-family -> fontFamily
  */

  const estiloNome = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
    //marginTop = '40px',
  }

  return (
    <React.Fragment>
      {titulo}
      <div>Meu app</div>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
      <div className={ativo ? 'ativo' : 'inativo'}>Número = {random * 100}</div>

      <div style={estiloNome}>{mostrarNome('Taiatella')}</div>
    </React.Fragment>
  )
}

export default App
