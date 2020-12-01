import React from 'react'
import UseEffectBasics from './components/2-useEffect/Basics'
import UseEffectCleanup from './components/2-useEffect/Cleanup'
import UseEffectFetchData from './components/2-useEffect/FetchData'
import Alternative from './components/2-useEffect/Slider/Alternative'

function App2() {
  return (
    <div className='container'>
      <UseEffectBasics />
      <UseEffectCleanup />
      <UseEffectFetchData />
      <Alternative/>
    </div>
  )
}

export default App2
