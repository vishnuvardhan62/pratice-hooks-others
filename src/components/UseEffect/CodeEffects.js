
import React, { useEffect, useState } from 'react'

export default function CodeEffects() {
   const [color, setColor] =  useState("navy")
    useEffect(() => {
        document.body.style.background = 
        color;
        document.body.style.color = 'pink';

        window.addEventListener ("keydown", handlerEnterButton) 
        return () => {
            window.removeEventListener("keydown", handlerEnterButton);  

        }
    }, [color])
    function changeColor ( ) {
        setColor('gold')
    }
    function handlerEnterButton (event) {
        if(event.keycode === 13) {
           setColor('red');
        }
    }
  return (
    <div>
      <h1> React App</h1>
      <button onClick={changeColor}>Change color</button>
    </div>
  )
}
