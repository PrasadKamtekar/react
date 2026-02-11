
import { useEffect, useState } from 'react'


function App() {

  const [title, setTitle] = useState("");
  

  const [detail, setDetail] = useState('');
  const [arr, setArr] = useState(()=> {
    const data = localStorage.getItem("notes");
    return data ? JSON.parse(data) : [];
  });
  
  useEffect(()=> {
    localStorage.setItem("notes" , JSON.stringify(arr));
  }, [arr]);

  const insert = () => {
    const copyArr = [...arr];
    copyArr.push({ titles: `${title}`, details: `${detail}` });
    setArr(copyArr);
    
  }

  const deleteNote = (idx)=> {
         const copyArr = [...arr];
         copyArr.splice(idx,1);
         setArr(copyArr);   
  }

  return (
    <>
      <div className='main-container'>

        <div className='input-container'>
          <h1>Add Notes</h1>

          <input
            onChange={(e) => { setTitle(e.target.value); }}
            type="text"
            placeholder='Enter Note'
            value={title}
            className='note'
          />

          <textarea
            onChange={(e) => { setDetail(e.target.value); }}
            placeholder='Enter Details'
            value={detail}
            className="detail"
          />

          <button className='btn' onClick={insert}>Add Note</button>
        </div>

        <div className='recent-c'>
          <h1>Recent Notes</h1>
          
            <div className="recent">
              {arr.map((notes, idx) => {
                return (<div className="recent-container" key={idx}>
                    <>
                      <h1>{notes.titles}</h1>
                      <p>{notes.details}</p>
                      <button   onClick={()=> deleteNote(idx)}>Delete</button>
                    </>
                </div>)
              })}
            </div>
        </div>

      </div>
    </>
  )
}

export default App
