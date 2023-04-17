
import React, { useState } from 'react'

const initialState = { width: 15};
const reducer = (state, action) => {
 switch (action) {
    case 'plus':
         return {width: state.width + 15}
    case 'minus' :
        return { width: Math.max(state.width - 15, 2)}
    default : 
      throw new Error ('WHAT S GOING ON ?')
    }
}

function Usereducer() {
    const [state, dispatch] = useState(reducer, initialState)
  return (
    <div>
      <div
        style={{ backgroud: "sky blue", height: "30px", width: state.width }}
      ></div>

      <div style={{ margin: "3rem" }}>
        <button onClick={() => dispatch("plus")}>Increase Bar size</button>
        <button onClick={() => dispatch("minus")}> Decrese bar size</button>
      </div>
    </div>
  );
}

export default Usereducer
