import React from 'react'
//import Product from './class0302 - exercise/Product'

const App = () => {
  const [comments, setComments] = React.useState([])
  const [input, setInput] = React.useState('')
  const inputElement = React.useRef()

  const timeoutRef = React.useRef()

  function handleClick() {
    setComments([...comments, input])
    setInput('')
    inputElement.current.focus()

    //the reference is created to be possible to reach the timeout created in the event before.
    //this ways de current timeout is clear and a new one started
    //the useRef here prevents to the timeout don't reset when a new comment is added,
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setComments([])
    }, 10000)
  }

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
      <input
        type="text"
        //Creact reference for this element
        //At this example the useRef is used to create a reference for the input element
        //This way is possible to focus it without using getElement from the DOM.
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Send</button>
    </div>
  )
}

export default App
