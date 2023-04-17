
import React from 'react'


const Keys = () => {

    const arrs = ['javascript', 'vishnu', 'nandhni']
   const strings = arrs.map((str) => <li id={str.id}>{str.toUpperCase()}</li>)
   const numbers = [1, 2, 3, 4, 5, 6, 7, 8,9];
   const numbs = numbers.map((numbrs) => <li key={numbrs.toString()}>{numbrs}</li> )
   const posts = [
     { id: 1, title: "Hello World", content: "Welcome to learning React!" },
     {
       id: 2,
       title: "Installation",
       content: "You can install React from npm.",
     },
   ]; 
   const content = posts.map((post) => (
     <li key={post.id}>
       id={post.id}
       title={post.title}
       content={post.content}
     </li>
   ));
   
   return (
    <div >
      {strings}
      <hr/>
      {numbs}
      <hr/>
      {content}
    </div>
  )
}

export default Keys
