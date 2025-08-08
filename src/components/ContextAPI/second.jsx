import React from 'react'
import Third from './third'

function second({name}) {
  return (
    <div className='bg-yellow-600 w-1/2 h-64'>
        <h1>SECOND</h1>
        <Third name={name}/>
    </div>
  )
}

export default second