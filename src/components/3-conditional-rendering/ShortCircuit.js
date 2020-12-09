import React, { useState } from 'react'
// short-circuit evaluation

const ShortCircuit = () => {
  const [text, setText] = useState('12')
  const firstValue = text || 'hello world'
  const secondValue = text && 'hello world'

  return (
    <>
      <h1 style={{ color: 'blue', marginBottom: '30px' }}>短絡評価</h1>
      {/* {if(){console.log('hello world')}}//このような書き方はReactではできない */}
      <h2 style={{ textAlign: 'left' }}>value : {firstValue}</h2>
      <h2 style={{ textAlign: 'left' }}>value : {secondValue}</h2>
      <h2 style={{ textAlign: 'left' }}>value:{text || 'Over 40 Web Club'}</h2>
      <h2 style={{ textAlign: 'left' }}>value:{text && 'Over 40 Web Club'}</h2>
    </>
  )
}

export default ShortCircuit
