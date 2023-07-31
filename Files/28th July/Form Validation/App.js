import { useState } from "react"
function App() {
const [err,setErr]=useState(false)
function handler(e){
  let item=e.target.value
  if(item.length<5 || item.length>8){
    setErr(true)
  }else{
    setErr(false)
  }
}
  return (
    <>
        
<input type="text" name="uid" onChange={handler}/>
<br/>
{/* Terinory operator */}
{err?<span>not valid value</span>:""}
    </>
  )
}
export default App

