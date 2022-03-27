import React from 'react'

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

  React.useEffect(() => {
    if (dataForm != null) {
      console.log(JSON.stringify(dataForm))
      console.log('requisitado')
    }
  }, [dataForm])

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
      <button>Send</button>
    </form>
  )
}

export default App
