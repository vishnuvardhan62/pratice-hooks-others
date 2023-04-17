import React from 'react'
import { useRef } from 'react'



function Ucontroll() {
    const inputRef = useRef();
    function handlesubmit  () {
        alert(`Name ${inputRef.current.value}`);
    }
  return (
    <div>
      <h3> Uncontrolled Components</h3>
      <form onSubmit={handlesubmit}>
        <label>Name :</label>
        <input type='text' name='name' ref={inputRef}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Ucontroll
