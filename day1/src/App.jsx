import React, { useState } from 'react'
import Increment from './Increment'
import Decrement from './Decrement'
import Reset from './Reset'

const App = () => {

  const [counter, setcounter]=useState(0)
  const numPlus=()=>{
    setcounter(counter+1)
    console.log("increment");
    
  }
  const numMinus=()=>{
    if (counter>0) {
      setcounter(counter-1)
      
    }
  }
  const reset=()=>{
    setcounter(0)
  }
  

  return (
    <div>
    <p>{counter}</p>
      <Increment onIncrement = {numPlus}/>
      <Decrement onDecrement={numMinus} disabled={counter===0}/>
      <Reset onReset={reset}/>
    </div>
  )
}

export default App