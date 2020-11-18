import React, { useState } from 'react'
import UseStateArray from './Week3/UseStateArray'

function App() {
  const [text, setText] = useState('勉強会ドリブン学習法')
  const handleClick = () => {
    if (text !== 'Reactシリーズ進行中') {
      setText('Reactシリーズ進行中')
    } else {
      setText('勉強会ドリブン学習法')
    }
  }
  return (
    <div className='container'>
      <h2>{text}</h2>
      <button className='btn' onClick={handleClick}>
        タイトルの変更
      </button>
      <div>
        <UseStateArray/>
      </div>
    </div>
  )
}

export default App
