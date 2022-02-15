const App = () => {
  function handleClick(event) {
    console.log(event)
    // alert('Comprou: ' + event.target.innerText)
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onMouseMove={handleClick}>Bermuda</button>
    </div>
  )
}

export default App
