import React from 'react'
import useFetch from './class0401 - Input form/useFetch'

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  })

  const [dataForm, setDataForm] = React.useState(null)
  const { loading, error, request } = useFetch()

  React.useEffect(() => {
    if (dataForm != null) {
      console.log(JSON.stringify(dataForm))
      request('https://ranekapi.origamid.dev/json/api/produto/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // form é o objeto com os dados do formulário
        body: JSON.stringify(dataForm),
      })
      console.log('requisitado')
    }
  }, [request, dataForm])

  function handleSubmit(event) {
    setDataForm(form)
    event.preventDefault()
    console.log('Executou a handleSumit')
  }

  function handleChange({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="senha"
        value={form.senha}
        onChange={handleChange}
      />

      <label htmlFor="zipcode">Zipcode</label>
      <input type="text" id="cep" value={form.cep} onChange={handleChange} />

      <label htmlFor="street">Street</label>
      <input type="text" id="rua" value={form.rua} onChange={handleChange} />

      <label htmlFor="number">Number</label>
      <input
        type="number"
        id="numero"
        value={form.numero}
        onChange={handleChange}
      />

      <label htmlFor="neighborhood">Nieghborhood</label>
      <input
        type="text"
        id="bairro"
        value={form.bairro}
        onChange={handleChange}
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="cidade"
        value={form.cidade}
        onChange={handleChange}
      />

      <label htmlFor="state">State</label>
      <input
        type="text"
        id="estado"
        value={form.estado}
        onChange={handleChange}
      />
      {loading && <p>Form sent! Waiting response!</p>}
      {error && <p>{error}</p>}
      <button>Send</button>
    </form>
  )
}

export default App
