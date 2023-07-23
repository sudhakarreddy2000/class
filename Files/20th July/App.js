import { useState, useEffect } from 'react'
function App() {
const [num, setNumber]=useState(0)
useEffect(()=>{
  console.log("Hello Effect")
},[])
const increment=()=>{
setNumber(num+1)
}
const decrement=()=>{
  setNumber(num-1)
  }
  return (
    <>
  <h1>Number {num}</h1>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
    </>
  )
}
export default App