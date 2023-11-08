import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const handleclick = () => {
    setCount(count + 1)
  }
  const handleclick1 = () => {
    setCount(count - 1)
  }
  const handleReset = () => setCount(0)
  return (
    <>
      <div style={{ margin: '1rem' }}>
        <div style={{ fontWeight: '800' }}>Counter</div>
        <div style={{ margin: '1rem' }}>{count}</div>
        <div style={{ margin: '1rem' }}>
          <button onClick={handleclick}>Increase the Count</button>
        </div>
        <div style={{ margin: '1rem' }}>
          <button onClick={handleclick1}>Decrese the Count</button>
        </div>
        {count!=0 && (
          <button onClick={handleReset}>Reset</button>
        )}
      </div>
    </>
  )
}

export default Counter
