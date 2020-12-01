import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    //必ずcallback functionを渡す
    // console.log('useEffectを呼び出す')
    if (value > 0) {
      document.title = `New Messages(${value})`
    }
  }, [])
  //からの配列を渡すと一度だけ呼ばれる

  useEffect(() => {
    // console.log('hello world')
  },[])

  // console.log('componentのレンダリング')
  return (
    <>
      <div className='container2'>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value + 1)}>
          Click Me!
        </button>
      </div>
    </>
  )
}

export default UseEffectBasics
