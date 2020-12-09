import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ color: 'blue', marginBottom: '30px' }}>
        コンポーネントの表示/非表示
      </h1>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, []);

  return (
    // <div style={{ marginTop: '10rem' }}>
    <div className='container'>
      <h1>Window</h1>
      <h2>size : {size}</h2>
    </div>
  )
}

export default ShowHide
