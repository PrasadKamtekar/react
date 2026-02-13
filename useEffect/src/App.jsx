import { useEffect, useState } from 'react'


import React from 'react'

function App() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(10);

useEffect(()=> {
  console.log("useEffect Running...")
}, [num2]);

  return (
    <div className='output'>
      <h1>value of num is {num}</h1>
      <h1>value of num2 is {num2}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
        onDoubleClick={() => {
          setNum2(num2 + 10);
        }}
      >
        click
      </button>


    </div>
  )
}

export default App
