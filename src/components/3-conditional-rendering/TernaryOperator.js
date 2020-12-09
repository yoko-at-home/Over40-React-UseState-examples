import React, { useState } from 'react'
// ternary operator

function TernaryOperator() {
  const [isError, setIsError] = useState(false)

  return (
    <>
      <h1 style={{ color: 'blue', marginBottom: '30px' }}>三項演算子</h1>

      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      <article className='container'>
        {isError && <h2>Error...</h2>}

        {/* {isError ? (
          <h3>there is an error...</h3>
        ) : (
          <div>
            <h3>there is no error</h3>
          </div>
        )} */}
      </article>
    </>
  )
}

export default TernaryOperator
