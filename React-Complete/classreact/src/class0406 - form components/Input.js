import React from 'react'

const Input = ({ id, label, setValue, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        //usado na aula 0406
        //onChange={({ target }) => setValue(target.value)}
        //adaptação da aula 0410
        onChange={onChange}
        {...props}
      />
    </>
  )
}

export default Input
