
import React from 'react'
import { useState } from 'react'

const Show = () => {
    const [show, setShow] = useState(true);
  
     function shows () {
        setShow(!show)
     }
    return (
      <div>
        <button onClick={shows}>
          Hide Elements
          {show ? "Hide Element Below" : "Show Element Below"}
        </button>
        {show && <div> Toggle Challenges</div>}
      </div>
    );
}

export default Show
