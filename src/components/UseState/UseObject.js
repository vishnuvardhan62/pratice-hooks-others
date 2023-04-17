import React, { useState } from 'react'

function UseObject() {
    const [state, setState] = useState({age: 16, sibilingsNum: 4 });
  
   const handleClicks = (value) => {
    setState({
        ...state, [value]: state[value] + 1
    })
   }
   const {age, sibilingsNum} = state
    return (
    <div>
      <p>Today i am {age}years of Age</p>
      <p> I have {sibilingsNum}sibilings</p>
      <button onClick={handleClicks.bind(null, 'age')}>Get older</button>
      <button onClick={handleClicks.bind(null, 'sibilingsNum')}>More sibiling</button>
    </div>
  )
}

export default UseObject
