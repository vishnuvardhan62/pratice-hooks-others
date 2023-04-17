import React, { useState } from 'react'

function FunsetState() {
    const [value, setValue] = useState(0);

   
  return (
    <div>
      <h2>Count Value is: {value}</h2>
      <button onClick={()=> setValue(0)}>Reset</button>
      <button onClick=
      {()=>setValue(prevCount=>prevCount + 1)}>
        Plus(+)</button>
      <button onClick={()=> setValue(prevCount=> prevCount - 1)}>
        Minus(-)</button>
    </div>
  );
}

export default FunsetState
