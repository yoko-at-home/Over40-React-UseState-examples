import React from 'react'
import WithOutUseStateCounter from './components/WithOutUseState'
import WithUseStateCounter from './components/WithUseState'
import UseStateArray from './components/UseStateArray'
import Title from './components/Title'

function App() {
  return (
    <div className='container'>
      <WithOutUseStateCounter />
      <WithUseStateCounter />
      <Title />
      <UseStateArray />
    </div>
  )
}

export default App
