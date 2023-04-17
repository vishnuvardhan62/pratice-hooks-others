import React, { useEffect } from 'react'

function Effectwithcleanup() {
  useEffect(()=>{
    const clicked = () => console.log('window clicked');
    window.addEventListener('click', clicked);
   return () => {
    window.removeEventListener('click', clicked)
   }
  },[])
  return (
    <div>
      When you click the window you' ll find a message
      logged to the console'
    </div>
  )
}

export default Effectwithcleanup
