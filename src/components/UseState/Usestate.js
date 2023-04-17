import React, { useState } from 'react'

function Usestate() {
    const [count, setCount] = useState('0');
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=> setCount((c)=> c + 1)}>
        Click Me</button>
    </div>
  )
}

export default Usestate
