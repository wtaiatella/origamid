import React from 'react'

const App = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button>Send</button>
    </form>
  )
}

export default App
