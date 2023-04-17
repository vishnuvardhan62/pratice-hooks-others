
import React, { useState } from 'react'

export default function CodeCamp() {
//     const [language, setLanguage] = useState('React!!!!!');
//     const [years, setYears ] = useState(0)
//     function changeLanguage  ()  {
//       setLanguage("React  Hooks")
//    }
//    function changeYears () {
//     setYears(years + 1)
//    }
   const [state, setState] = useState({
    language: "Reacr Hooks",
    year : 2,
   });
   function changeLanguage  ()  {
      setState({ ...state ,language:"React  Hooks"})
   }
   function changeYears () {
    setState( prev => {
        return {
            ...prev,
            year:prev.year + 1
        }
   })
}
  
    return (
    <div>
      <h1 onClick={changeLanguage}> I am learning {state.language} for {state.year}</h1>
      <button onClick={changeYears}>Add years</button>
    </div>
  )
}

