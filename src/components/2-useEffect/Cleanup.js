import React, { useState, useEffect } from 'react'

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    // cleanup function
    return () => {
      console.log('removeEventListener')
      window.removeEventListener('resize', checkSize)
    }
    // second argument
  },[])
  console.log('render')
  return (
    <>
      <div className='container2'>
        <h1>ウインドウサイズ</h1>
        <h2>{size} PX</h2>
      </div>
    </>
  )
}

export default UseEffectCleanup
