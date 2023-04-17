import React, { useState } from 'react'

const Controlled = () => {
     const [name, setName] = useState();
     function handleSubmit () {
        alert(`Name: ${name}`);
     }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Controlled components</h3>
        <label>Name :</label>
        <input type='text' value={name}
        onChange={(e)=> setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Controlled
