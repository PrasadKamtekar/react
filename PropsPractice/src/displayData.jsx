import React from 'react'
import './index.css'

function displayData(props) {
  return (
    <div>
      <h1 className='dis'>Welcome, {props.data}</h1>
    </div>
  )
}

export default displayData
