import React from 'react'

const styleBlock = {
  border: '2px solid',
  padding: '20px',
  margin: '20px',
  width: '100px',
}
/* const styleLink = {
  // border: '1px solid',
  padding: '20px',
  display: 'block',
  // margin: '20px',
} */

const Button = ({ setData, setLoading, children }) => {
  async function handleClick(event) {
    setLoading(true)
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    )
    const json = await response.json()
    console.log(json)
    setData(json)
    setLoading(false)
  }

  return (
    <button style={styleBlock} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
