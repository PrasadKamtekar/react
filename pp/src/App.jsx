import React, { useState } from 'react'

function App() {

  const [data, setData] = useState({ userName: "Prasad", age: 21 });
  const [arr, setArr] = useState([]);
  const [num, setNum] = useState(0);

  const passData = () => {
    const newData = { ...data };
    newData.userName = "Saiprasad";
    setData(newData);
    console.log(data);
  }

  const formHandler = (e)=> {
    e.preventDefault();
    console.log(e);
    console.log("Form Submitting");
  }

  return (
    <div>
      <h1>{data.userName}, {data.age}</h1>
      <button onClick={(passData)}>Check</button>
      <h1>{arr}</h1>
      <button onClick={() => {
        const newArr = [...arr];
        newArr.push(" he ",90);
        setArr(newArr);
      }}>change Array</button>

      <h1>{num}</h1>
      <button onClick={(e) => {
        
        setNum(num => num + 1);
        setNum(num => num + 1);
        setNum(num => num + 1);
    
      }}>Number</button>

      <form onSubmit={formHandler}>
        <input type="text" placeholder='Enter Name : ' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
