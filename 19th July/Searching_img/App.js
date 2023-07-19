import user from './user1.json'
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
      {user.filter(x=>x.pic.includes(search)).map(val => <img src={val.pic} alt=""/>)}

    </>
  )
}
export default App