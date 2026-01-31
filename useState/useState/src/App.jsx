import React, { useState } from 'react'

function App() {
 let [counter, setCounter] =  useState(0);
  counter + 1;
  console.log(counter);
  return (
    <div className='box'>
      <h1>{counter}</h1>
      <button onClick={() => {
             setCounter(counter + 1);  
      }} >increase</button>
      <button onClick={() => {
         setCounter(counter + 1);
      }}>decrease</button>
    </div>
  )
}

export default App
