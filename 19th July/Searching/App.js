import user from './user.json'
import { useState } from 'react'
function App() {
const [search, setSearch]=useState()
const test=(e)=>{
  setSearch(e.target.value)
}
  return (
    <>
      <h1>JSON Data in React</h1>
      <input type="text" placeholder="search here..." value={search} onChange={test}/>
      <br/>
      {user.filter(x=>x.name.includes(search)).map(val => <li>{val.name}</li>)}

    </>
  )
}
export default App