import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'pitang',
    born: 1965,
    message: 'I am the boss',
  })

  const changeMessage = () => {
    setPerson({ ...person, message: 'My dream came true!' })
  }
  return (
    <div className='container'>
      <h2>{person.name}</h2>
      <h3>{person.born}</h3>
      <h3>{person.message}</h3>
      <button className='btn2' onClick={changeMessage}>
        Change Message
      </button>
      <div />
    </div>
  )
}

export default UseStateObject
