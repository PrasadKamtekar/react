
import Recent from './recentNotes.jsx'

function App() {
  return (
    <>
      <div className='main-container'>
        
        <div className='input-container'>
          <h1>Add Notes</h1>

          <input
            type="text"
            placeholder='Enter Note'
            className='note'
          />

          <textarea
            placeholder='Enter Details'
            className="detail"
          />

          <button className='btn'>Add Note</button>
        </div>

        <div className='recent-c'>
          <h1>Recent Notes</h1>
          <div className='recent'>
          <Recent />
          <Recent />
          <Recent />
          <Recent />
          <Recent />
          <Recent />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
