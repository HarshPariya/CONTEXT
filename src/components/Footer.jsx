import React, { useContext } from 'react'
import { CounterContext } from '../context/Counter'
const Footer = () => {
      const counterContext = useContext(CounterContext);
    console.log(counterContext)
  return (
    <div>Footer</div>
  )
}

export default Footer