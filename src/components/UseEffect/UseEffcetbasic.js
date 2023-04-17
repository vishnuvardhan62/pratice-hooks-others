import React, { useEffect, useState } from 'react'

function UseEffcetbasic() {
    const [age, setAge] = useState(0);
    
    const handlesClick = () => {
        setAge (age + 1)
    }
    useEffect(()=> {
        document.title = 'You are ' + age
 + 'years old!' })
  return (
    <div>
      <h2>Look at the title of the curremnt tab in broswer</h2>
      <button onClick={handlesClick}>Click Me</button>
    </div>
  )
}

export default UseEffcetbasic
