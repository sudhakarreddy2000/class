import {useState} from 'react'

function App(){
  const [city,setCity]=useState('')
  const changeHandler=e=>{
    setCity(e.target.value)
  }
const submitHandler=e=>{
e.preventDefault()
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb3d16c8a86ab641942ff1afd415d327`)
.then(result=>result.json())
.then(data=>{
  const kelvin=data.main.temp
  const cels=kelvin-273.15
  console.log(cels)
})
}
  return(
    <>
    <h1>Hello</h1>
    <form onSubmit={submitHandler}>
<input type="text" value={city} onChange={changeHandler}/>
<br/>

<input type="submit"/>

</form>

</>
  )
}
export default App

// http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb3d16c8a86ab641942ff1afd415d327
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}