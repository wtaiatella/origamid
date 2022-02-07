// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

/* const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
} */

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
}

const App = () => {
  const dados = mario

  const compras = dados.compras
  const precos = compras.map((compra) => +compra.preco.replace('R$ ', ''))

  console.log(compras)
  console.log(precos)

  const totalGasto = precos.reduce((acumulador, atual) => acumulador + atual, 0)

  console.log(totalGasto)

  const ativa = {
    color: 'green',
  }

  const inativa = {
    color: 'red',
  }

  const paragrafo = {
    marginTop: '10px',
  }

  return (
    <div>
      <div style={paragrafo}>Nome: {dados.cliente}</div>
      <div style={paragrafo}>Idade: {dados.idade}</div>
      <div style={paragrafo}>
        Situação:{' '}
        <span style={dados.ativa ? ativa : inativa}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </div>
      <div style={paragrafo}>Total gasto:{totalGasto}</div>

      {totalGasto > 10000 && (
        <div style={paragrafo}>Voce está gastando muito</div>
      )}
    </div>
  )
}

export default App
