import React, { useState } from 'react'

function WithUseStateCounter() {
  const [count, setCount] = useState(0)
  const reset = () => {
    setCount(0)
  }

  return (
    <section className='container'>
      <h3>useStateを使うと...</h3>
      <div className='count_number'>{count}</div>
      <button className='btn2' onClick={() => setCount(count + 1)}>
        カウントアップ（State）(+1)
      </button>

      <button className='btn2' onClick={reset}>
        リセット
      </button>

      <button className='btn2' onClick={() => setCount(count - 1)}>
        カウントダウン（State）(-1)
      </button>
    </section>
  )
}

export default WithUseStateCounter
