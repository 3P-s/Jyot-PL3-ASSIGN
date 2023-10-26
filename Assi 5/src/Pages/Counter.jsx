import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0)
  const handleclick=()=>{
    setCount(count+1)
  }
  const handleReset=()=>setCount(0)
  return (
    <div>
      <div>{count}</div>
      {}
    </div>
  )
}

export default Counter
