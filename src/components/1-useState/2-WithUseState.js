import React, { useState } from 'react'
//Hookは小文字のuseで始める useState, useEffect, useCallback ...
//コンポーネント名は必ず大文字で始める
//関数/コンポーネント内で使用する
//条件の中で使えない=> if () {}

function WithUseStateCounter() {
  const [count, setCount] = useState(0)

  return (
    <section className='container'>
      <div className='count_number'>{count}</div>
      <button className='btn2' onClick={() => setCount(count + 1)}>
        カウントアップ（State）(+1)
      </button>
    </section>
  )
}

export default WithUseStateCounter
