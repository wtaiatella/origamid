import React from 'react'
import Checkbox from './class0406 - form components/Checkbox'
import Input from './class0406 - form components/Input'
import Radio from './class0406 - form components/Radio'
import Select from './class0406 - form components/Select'

const App = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [product, setProduct] = React.useState('')
  const [color, setColor] = React.useState('red')
  const [fruits, setFruits] = React.useState([])
  const [cep, setCep] = React.useState('')
  const [error, setError] = React.useState(null)

  function validateCEP(value) {
    if (value.length === 0) {
      setError('Fill it up a value')
      return false
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Fill it up with a valid CEP')
      return false
    } else {
      setError(null)
      return true
    }
  }

  function handleBlurCEP({ target }) {
    console.log(target.value)
    validateCEP(target.value)
  }

  function handleChange({ target }) {
    if (error) validateCEP(target.value)
    setCep(target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (validateCEP(cep)) {
      console.log('enviou')
    } else {
      console.log('dont send')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Fruits</h2>
      <Checkbox
        options={['Apple', 'grape', 'Orange']}
        value={fruits}
        setValue={setFruits}
      />
      <p>{fruits}</p>
      <h2>Colors</h2>
      <Radio options={['blue', 'red']} value={color} setValue={setColor} />
      <p>{console.log(color)}</p>
      <h2>Products</h2>
      <Select
        options={['Smartphone', 'Tablet 10"']}
        value={product}
        setValue={setProduct}
      />

      <Input label="Name" id="name" value={name} setValue={setName} />

      <Input
        label="Email"
        id="email"
        value={email}
        setValue={setEmail}
        required
      />

      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        value={cep}
        onBlur={handleBlurCEP}
        onChange={handleChange}
      />
      {error && <p>{error}</p>}
      <button>Send</button>
    </form>
  )
}

export default App
