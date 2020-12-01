import React, { useState } from 'react'

const UseStateObjectIndividual = () => {
  const [name, setName] = useState('Son')
  const [born, setBorn] = useState(1960)
  const [message, setMessage] = useState('I am a teacher')

  const changeMessageToggle = () => {
    if (message !== "I'll be a Web developer!") {
      setMessage("I'll be a Web developer!")
    } else {
      setMessage('I am a teacher')
    }
  }
  return (
    <div className='container'>
      <h2>{name}</h2>
      <h3>{born}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessageToggle}>
        Change Message
      </button>
      <div />
    </div>
  )
}

export default UseStateObjectIndividual
