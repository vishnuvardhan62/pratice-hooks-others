import React, { useState } from 'react'

function MultiState() {
     const [age, setAge] = useState(19);
     const [ siblinnName, setSibilingName] = useState(10)

     const handleClick = () => {
        setAge(age  + 1)
     } 
     const handleClickSibling = () => {
        setSibilingName(siblinnName + 1);
     }
  return (
    <div>
      <p>Today I am years {age} of age</p>
      <p> I have {siblinnName}siblinnName</p>
      <button onClick={ handleClick}>Get older!</button>
      <button onClick={handleClickSibling}>more sibiling</button>
    </div>
  )
}

export default MultiState

