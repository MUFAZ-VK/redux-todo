import React, { useContext } from 'react'
import { CounterContext } from '../../Context/countContext'
function Third({name}) {

  const {count, setCount} = useContext(CounterContext)
  return (
    <div className='bg-blue-600 w-1/2 h-64'>
        <h1>THIRD name is {name}</h1>
        <h1 className='text-white'>count : {count}</h1>
        <button 
        onClick={()=>setCount(count+1)}
        className="bg-red-700 py-1 px-6 rounded-xl hover:bg-red-600">increment</button>
        <button 
        onClick={()=> setCount(count-1)}
        className="bg-green-700 py-1 px-6 rounded-xl hover:bg-green-600">decrement</button>
        <button 
        onClick={()=> setCount(0)}
        className="text-white bg-black py-1 px-6 rounded-xl hover:bg-black">reset</button>
        
    </div>
  )
}

export default Third