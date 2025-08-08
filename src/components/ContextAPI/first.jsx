import React from 'react'
import Second from './second'

function first({name}) {
  return (
    <div className='bg-green-600 w-1/2 h-64'>
        <h1>FIRST</h1>
        <Second name={name}/>
    </div>
  )
}

export default first