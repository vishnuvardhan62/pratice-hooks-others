
import React, { useState } from 'react'

const Clickme = () => {
    const [cliclkme, setClickMe] = useState(0);
     function Clickmes () {
       alert('Clicked')
     }
     function Clickme1() {
       alert("you have click the button 1");
     }
     function Clickme2() {
       alert("you have click the button 2");
     }
     function Clickme3() {
       alert("you have click the button 3");
     }
     function cli () {
        setClickMe(cliclkme + 1);
     }
  return (
    <div>
      <button onClick={Clickmes}>Clickme</button>
      <button onClick={Clickme1}>Button1</button>
      <button onClick={Clickme2}>Button2</button>
      <button onClick={Clickme3}>Button3</button>
      <h3>You have clickme : {cliclkme}</h3>
      <button onClick={cli}>Clicks</button>
    </div>
  );
}

export default Clickme
