import React from 'react'

const App = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: '',
    zipcode: '',
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: '',
  })

  function handleSubmit(event) {
    event.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((json) => setForm(json))
    console.log(form)
  }

  function handleChange({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={form.name} onChange={handleChange} />
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
        id="password"
        value={form.password}
        onChange={handleChange}
      />

      <label htmlFor="zipcode">Zipcode</label>
      <input
        type="text"
        id="zipcode"
        value={form.zipcode}
        onChange={handleChange}
      />

      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        value={form.street}
        onChange={handleChange}
      />

      <label htmlFor="number">Number</label>
      <input
        type="number"
        id="number"
        value={form.number}
        onChange={handleChange}
      />

      <label htmlFor="neighborhood">Nieghborhood</label>
      <input
        type="text"
        id="neighborhood"
        value={form.neighborhood}
        onChange={handleChange}
      />

      <label htmlFor="city">City</label>
      <input type="text" id="city" value={form.city} onChange={handleChange} />

      <label htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        value={form.nstate}
        onChange={handleChange}
      />
      <button>Send</button>
    </form>
  )
}

export default App
