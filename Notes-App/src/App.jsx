
import { useState } from 'react'


function App() {

  const [title, setTitle] = useState('');

  const [detail, setDetail] = useState('');
  const [arr, setArr] = useState([]);

  const insert = () => {
    setArr(p => [...p, [title, detail]]);
    console.log(title, detail)
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
            {arr.map((row, i) => (
              <div key={i} >
                {row.map((item, j) => (
                  <div key={j} className="recent-container">
                    <h1>{item.title}</h1>
                    <p>{item.detail}</p>
                    <button>Delete</button>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>

      </div>
    </>
  )
}

export default App
