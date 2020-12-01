import React from 'react'
import WithOutUseStateCounter from './components/1-useState/1-WithOutUseState'
import WithUseStateCounter from './components/1-useState/2-WithUseState'
import UseStateArray from './components/1-useState/3-UseStateArray'
import Title from './components/1-useState/Title'
import UseStateObject from './components/1-useState/4-UseStateObject'
import UseStateObjectIndividual from './components/1-useState/5-UseStateObjectIndividual'
import UseStateCounterComplex from './components/1-useState/6-UseStateCounterComplex'

function App() {
  return (
    <div className='container'>
      <WithOutUseStateCounter />
      <WithUseStateCounter />
      {/* <Title /> */}
      <UseStateArray />
      <UseStateObject />
      <UseStateObjectIndividual />
      <UseStateCounterComplex/>
    </div>
  );
}

export default App;
