import React from 'react'
import Input from './class0411 - hook useForm/Input'
import useForm from './class0411 - hook useForm/useForm'

const App = () => {
  const cep = useForm('cep')
  const email = useForm('email')
  const nome = useForm()
  const sobrenome = useForm(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('enviou')
    } else {
      console.log('dont send')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="nome" type="text" {...nome} />
      <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />

      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />

      <Input
        label="Email"
        id="email"
        type="e-mail"
        placeholder="escreva seu e-mail"
        {...email}
      />

      <button>Send</button>
    </form>
  )
}

export default App
