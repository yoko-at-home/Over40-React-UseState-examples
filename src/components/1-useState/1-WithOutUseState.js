import React from 'react'

function WithOutUseStateCounter() {
  const countNotState = 0
  console.log(countNotState+1)

  return (
    <section className='container'>
      <h3>useStateを使わないと...</h3>
      <div className='count_number'>{countNotState}</div>
      <button className='btn2' onClick={() => countNotState + 1}>
        カウントアップ (not state) (+1)
      </button>

    </section>
  )
}

export default WithOutUseStateCounter
