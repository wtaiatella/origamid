/* eslint-disable no-unused-vars */
import React from 'react'
// eslint-disable-next-line no-unused-vars
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <Input />
      </p>
      <Button />
    </form>
  )
}

export default Form
