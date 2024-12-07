import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  const increase = ()=>{
    setNum(num+10)
  }
  const decrease = ()=>{
    setNum(num-10)
  }

  return (
    <div>
      <h1>Value of num is = {num}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button>Jump by 100</button>

    </div>
  )
}

export default App