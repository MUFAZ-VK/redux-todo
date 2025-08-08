import React from 'react'

function Export() {
  return (

    //1. default export
    //2. named export
    <div>
        <h1>export component</h1>
    </div>
  )
}

// export function Sample() {
function Sample() {
  return (
    <div>
      hello
    </div>
  )
}
// export const Button = () => {
const Button = () => {
  return (
    <div>
      

    </div>
  )
}
export {Sample, Button}//named export
export default Export  //default export