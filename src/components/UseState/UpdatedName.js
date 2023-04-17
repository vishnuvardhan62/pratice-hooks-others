import React, { useState } from 'react'
import './UpdatedCss.css'
function UpdatedName() {
    const [input, setValue] = useState(" ");
    const [name, setName] = useState("vishnu");

    const handleInput = (event) => {
        setValue(event.target.value);
    }
    const updateName = (event) => {
        event.preventDefault();
        setName(input);
        setValue(" ")
    }
  return (
    <div className='box'>
      <h1>
        Hello, {name}
      </h1>
      <form className='form'>
        <div className='field'>
            <label for="name">Update Name</label>
            <div>
                <input type="text" 
                name="name-1"
                value={input}
                class="input"
                onChange={handleInput}/>
            </div>
        </div>
        <div className='field'>
            <div className='control'>
                <button onClick={updateName} className='button is-dark'>
                    Save
                </button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default UpdatedName;
