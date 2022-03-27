import React from 'react'

const Checkbox = ({ options, value, setValue, ...props }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value])
    } else {
      setValue(value.filter((acc) => acc !== target.value))
    }
  }

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            checked={value.includes(option)}
            value={option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </>
  )
}

export default Checkbox
