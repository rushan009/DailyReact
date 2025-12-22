import React from 'react'

const Decrement = ({onDecrement, disabled}) => {
  return (
    <button onClick={onDecrement} disabled={disabled}>Decrement</button>
  )
}

export default Decrement