
import React, { useRef } from 'react'

export default function CodeRef() {
    const inputValue = useRef(null);

    function handleClearInput () {
        //  console.log(inputValue.current.)
        inputValue.current.value = '';
        inputValue.current.focus();
    }
  return (
    <div>
      <form>
        <input type='text' ref={inputValue}/>
        <button onClick={handleClearInput}>Clear Input</button>
      </form>
    </div>
  )
}
