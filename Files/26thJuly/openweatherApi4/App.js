import {useState} from 'react'

function App(){
  const [city,setCity]=useState('')
  const [result, setResult]=useState('')
  const changeHandler=e=>{
    setCity(e.target.value)
  }
const submitHandler=e=>{
e.preventDefault()
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e849ec378296aae22dc243a8b9d84def`)
.then(result=>result.json())
.then(data=>{
  const kelvin=data.main.temp
  const cels=kelvin-273.15
  //console.log(cels)
  setResult(Math.round(cels))
})
}
  return(
    <>
    <h1>Hello</h1>
    {result}
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