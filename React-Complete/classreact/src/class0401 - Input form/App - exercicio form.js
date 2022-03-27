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

  const [response, setResponse] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response)
      //response.json()
      console.log(response)
    })
    //.then((json) => setForm(json))
  }

  function handleChange({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }
  console.log(form.name)
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
      {response && response.ok && <p>Form sent successfully</p>}
      <button>Send</button>
    </form>
  )
}

export default App
